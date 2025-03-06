import re
import math
import ast
from typing import Callable, List

def insert_implicit_multiplication(expr: str) -> str:
    """Insert implicit multiplication between operands."""
    # Updated token pattern to support negative numbers and scientific notation.
    token_pattern = r'\*\*|[+\-*/^(),]|-?\d+(?:\.\d+)?(?:[eE][+\-]?\d+)?|[a-zA-Z_][a-zA-Z0-9_\.]*'
    tokens: List[str] = re.findall(token_pattern, expr)
    
    def is_operand(token: str) -> bool:
        """Check if token is an operand (number, variable or closing parenthesis)."""
        if re.fullmatch(r'-?\d+(?:\.\d+)?(?:[eE][+\-]?\d+)?', token):
            return True
        if re.fullmatch(r'[a-zA-Z_][a-zA-Z0-9_\.]*', token):
            return True
        if token == ')':
            return True
        return False

    def is_start_operand(token: str) -> bool:
        """Check if token can start an operand (number, variable or opening parenthesis)."""
        if re.fullmatch(r'-?\d+(?:\.\d+)?(?:[eE][+\-]?\d+)?', token):
            return True
        if re.fullmatch(r'[a-zA-Z_][a-zA-Z0-9_\.]*', token):
            return True
        if token == '(':
            return True
        return False

    # Expanded set of known functions/constants.
    known_funcs = {
        "math.sin", "math.cos", "math.tan", "math.log",
        "math.log10", "math.exp", "math.sqrt", "math.factorial",
        "math.comb", "math.gamma", "math.erf",
        "math.e", "math.pi", "min", "max", "abs", "sum", "range"
    }

    new_tokens: List[str] = []
    for i, token in enumerate(tokens):
        new_tokens.append(token)
        if i < len(tokens) - 1:
            curr_token = token
            next_token = tokens[i+1]
            # Do not insert multiplication if next token is part of a generator expression.
            if next_token in {"for", "in", "if", "range"} or curr_token in {"for", "in", "if", "range"}:
                new_tokens.append(' ')
                continue
            # Insert multiplication if current token is an operand and the next token can start one.
            if is_operand(curr_token) and is_start_operand(next_token):
                # Avoid inserting multiplication between a known function and an opening parenthesis.
                if not (curr_token in known_funcs and next_token == '('):
                    new_tokens.append('*')
    return ''.join(new_tokens)

class FreeNameVisitor(ast.NodeVisitor):
    def __init__(self):
        self.free_names = set()
        self.bound_stack = []

    def visit_Name(self, node: ast.Name):
        if isinstance(node.ctx, ast.Load):
            if not any(node.id in scope for scope in self.bound_stack):
                self.free_names.add(node.id)
        self.generic_visit(node)

    def visit_Lambda(self, node: ast.Lambda):
        scope = {arg.arg for arg in node.args.args}
        self.bound_stack.append(scope)
        self.generic_visit(node)
        self.bound_stack.pop()

    def visit_ListComp(self, node: ast.ListComp):
        for comp in node.generators:
            scope = self._get_bound_names(comp.target)
            self.bound_stack.append(scope)
            self.visit(comp.iter)
            for if_clause in comp.ifs:
                self.visit(if_clause)
        self.visit(node.elt)
        for _ in node.generators:
            self.bound_stack.pop()

    def visit_GeneratorExp(self, node: ast.GeneratorExp):
        for comp in node.generators:
            scope = self._get_bound_names(comp.target)
            self.bound_stack.append(scope)
            self.visit(comp.iter)
            for if_clause in comp.ifs:
                self.visit(if_clause)
        self.visit(node.elt)
        for _ in node.generators:
            self.bound_stack.pop()

    def visit_SetComp(self, node: ast.SetComp):
        for comp in node.generators:
            scope = self._get_bound_names(comp.target)
            self.bound_stack.append(scope)
            self.visit(comp.iter)
            for if_clause in comp.ifs:
                self.visit(if_clause)
        self.visit(node.elt)
        for _ in node.generators:
            self.bound_stack.pop()

    def visit_DictComp(self, node: ast.DictComp):
        for comp in node.generators:
            scope = self._get_bound_names(comp.target)
            self.bound_stack.append(scope)
            self.visit(comp.iter)
            for if_clause in comp.ifs:
                self.visit(if_clause)
        self.visit(node.key)
        self.visit(node.value)
        for _ in node.generators:
            self.bound_stack.pop()

    def _get_bound_names(self, target) -> set:
        names = set()
        if isinstance(target, ast.Name):
            names.add(target.id)
        elif isinstance(target, (ast.Tuple, ast.List)):
            for elt in target.elts:
                names.update(self._get_bound_names(elt))
        return names
    
def get_parameters(expr: str, safe_names: set) -> List[str]:
    """
    Extracts free variable names from an expression (those that are not in safe_names).
    """
    tree = ast.parse(expr, mode='eval')
    visitor = FreeNameVisitor()
    visitor.visit(tree)
    return sorted(visitor.free_names - safe_names)

def latex_to_python_function(latex_expr: str, debug: bool = False) -> Callable:
    """
    Convert a LaTeX expression into a Python function.

    Supported conversions include:
        - Fractions: \frac{a}{b}       -> ((a)/(b))
        - Square roots: \sqrt{a}         -> math.sqrt(a)
        - Trigonometric functions: \sin, \cos, \tan
        - Logarithms: \ln, \log          -> math.log, math.log10
        - Exponential: \exp             -> math.exp
        - Exponential with base e: e^{...} -> math.exp(...)
        - Constants: \pi, \e, \lambda    -> math.pi, math.e, lmbd (since lambda is reserved)
        - Exponentiation: '^'            -> '**'
        - Factorials: x!                -> math.factorial(x)
        - Binomial coefficients using pmatrix:
            \begin{pmatrix} n\\ k \end{pmatrix}  -> math.comb(n, k)
        - Summation: 
            \sum_{i=a}^{b}{expression} -> sum((expression) for i in range((a), (b)+1))
        - \min, \max, \abs            -> min, max, abs respectively
        - Implicit multiplication (e.g. 2x becomes 2*x)

    Additional replacements:
        - \left and \right are removed.
        - \cdot and \times are replaced with '*'.

    :param latex_expr: The LaTeX expression as a string.
    :param debug: If True, prints intermediate transformation steps.
    :return: A function that takes keyword arguments and evaluates the expression.
    :raises ValueError: If compilation or evaluation fails.
    """
    if debug:
        print("Original:", latex_expr)
    
    # Remove unnecessary LaTeX commands.
    latex_expr = re.sub(r'\\left', '', latex_expr)
    latex_expr = re.sub(r'\\right', '', latex_expr)
    if debug:
        print("After removing \\left and \\right:", latex_expr)
    
    # Replace LaTeX multiplication symbols.
    latex_expr = re.sub(r'\\cdot', '*', latex_expr)
    latex_expr = re.sub(r'\\times', '*', latex_expr)
    if debug:
        print("After replacing \\cdot and \\times:", latex_expr)
    
    # Process pmatrix environments (used for binomial coefficients).
    latex_expr = re.sub(
        r'\\begin\s*{pmatrix}\s*([^\\]+?)\s*\\\\\s*([^\\]+?)\s*\\end\s*{pmatrix}',
        r'math.comb(\1, \2)',
        latex_expr,
        flags=re.DOTALL
    )
    if debug:
        print("After pmatrix:", latex_expr)
    
    # Define replacement patterns for common LaTeX constructs.
    replacements = [
        # Summation: \sum_{i=a}^{b}{expression} + Summation with array of values: \sum_{i=1}^{n}(y_i - (a+bx_i))^2
        (r'\\sum\s*_{([a-zA-Z_][a-zA-Z0-9_]*)=([^}]+)}\s*\^{([^}]+)}\s*[\{\(]([^}\)]+)[\}\)]', 
            r'sum((\4) for \1 in range((\2), (\3)+1))'),
        # Fraction with potential nested braces.
        (r'\\frac\s*{([^{}]*(?:{[^{}]*})*[^{}]*)}\s*{([^{}]*(?:{[^{}]*})*[^{}]*)}', r'((\1)/(\2))'),
        # Convert isolated negative expressions in braces.
        (r'{\s*(-[^{}]+)\s*}', r'(\1)'),
        (r'\\sqrt\s*{([^}]*)}', r'math.sqrt(\1)'),
        (r'\\sin', 'math.sin'),
        (r'\\cos', 'math.cos'),
        (r'\\tan', 'math.tan'),
        (r'\\ln', 'math.log'),
        (r'\\log', 'math.log10'),
        (r'\\exp', 'math.exp'),
        (r'\be\s*\^{\s*([^}]+)\s*}', r'math.exp(\1)'),
        (r'\\pi', 'math.pi'),
        (r'\\e\b', 'math.e'),
        (r'\\lambda', 'lmbd'),
        (r'\\min', 'min'),
        (r'\\max', 'max'),
        (r'\\abs', 'abs'),
        (r'(?<!\*)\^(?!\*)', '**'),
    ]
    
    for pattern, replacement in replacements:
        latex_expr = re.sub(pattern, replacement, latex_expr)
        
    if debug:
        print("After replacements:", latex_expr)
    
    # Process factorials: convert x! into math.factorial(x)
    pattern_factorial = re.compile(r'(\([^()]+\)|[a-zA-Z0-9_]+)!')
    while pattern_factorial.search(latex_expr):
        latex_expr = pattern_factorial.sub(r'math.factorial(\1)', latex_expr)
    if debug:
        print("After factorial:", latex_expr)
    
    # Insert implicit multiplication where needed.
    latex_expr = insert_implicit_multiplication(latex_expr)
    if debug:
        print("After implicit multiplication:", latex_expr)
    
    latex_expr = re.sub(r'\b([a-zA-Z])([a-zA-Z]+)_([a-zA-Z0-9]+)\b', r'\1*\2[\3]', latex_expr)
    latex_expr = re.sub(r'\b([a-zA-Z]+)_([a-zA-Z0-9]+)\b', r'\1[\2]', latex_expr)
    if debug:
        print("After subscript conversion:", latex_expr)
    
    # Safe globals include math and additional functions.
    safe_globals = {
        'math': math,
        'min': min,
        'max': max,
        'abs': abs,
        'sum': sum,
        'range': range,
        '__builtins__': {}
    }
    safe_names = set(safe_globals.keys())
    
    parameters = get_parameters(latex_expr, safe_names)
    
    # Compile the final expression to catch syntax errors early.
    try:
        compiled_expr = compile(latex_expr, '<string>', 'eval')
    except Exception as e:
        raise ValueError(f"Error in expression compilation: {e}")
    
    def generated_function(**kwargs):
        try:
            return eval(compiled_expr, safe_globals, kwargs)
        except Exception as e:
            raise ValueError(f"Error in expression evaluation: {e}") from e

    return generated_function, parameters

# Example usage:
if __name__ == "__main__":
    examples = [
        # Poisson distribution PMF.
        (r"\frac{\lambda^ke^{-\lambda}}{k!}", {"lmbd": 2.0, "k": 3}),
        # Summation: sum_{i=1}^{n}{i^2}
        (r"\sum_{i=1}^{n}{i^2}", {"n": 5}),
        (r"\frac{n!}{r!(n-r)!}", {"n": 50, "r": 10}),
        (r"\frac{(n+r-1)!}{r!(n-1)}", {"n": 5, "r": 3}),
        (r"\begin{pmatrix} n\\ k \end{pmatrix} p^k(1-p)^{n-k}", {"n": 10, "k": 3, "p": 0.5}),
        (r"\min(-3, 4, \abs(-7))", {}),
        (r"\sum_{i=1}^{n}(y_i - (a+bx_i))^2", {"n": 10, "y": [1, 2, 3, 4, 5], "x": [1, 2, 3, 4, 5], "a": 1, "b": 1})
    ]
    
    for expr, params in examples:
        try:
            func, parameters = latex_to_python_function(expr, debug=True)
            result = func(**params)
            print(f"\nExpression: {expr}\nParameters: {params}\nResult: {result}\nParameters: {parameters}\n")
        except Exception as err:
            print(f"Error processing '{expr}': {err}\n")
