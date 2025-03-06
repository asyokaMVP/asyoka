---
id: schrodinger
title: Schrödinger
sidebar_position: 2
---

import { Python } from '@site/src/components/Code/Python';
import { CitationProvider, Citation, References } from '@site/src/components/Citation/Citation';

<CitationProvider>

# Schrödinger Equation

Schrödinger equation $ i \hbar \frac{\partial \psi}{\partial t} = \hat{H} \psi $ is a fundamental equation in quantum mechanics that describes the time evolution of a quantum system. It is a partial differential equation that relates the wave function of a system to its potential energy.

<Python
    code={
`def solve_schrodinger(N, L, V, E_guess, dx=1e-2, max_iter=1000, tol=1e-6):
    def schrodinger_step(psi, E, dx):
        psi_new = [0] * N
        psi_new[0], psi_new[1] = 0, dx
        for i in range(1, N - 1):
            psi_new[i + 1] = (2 * (1 - (dx ** 2 / 2) * (V(i * dx) - E)) * psi_new[i] - psi_new[i - 1])
        return psi_new

    def find_energy(E, dx):
        for _ in range(max_iter):
            psi = schrodinger_step([0] * N, E, dx)
            if abs(psi[-1]) < tol:
                return E, psi
            E += tol
        return None, None

    E, psi = find_energy(E_guess, dx)
    return E, psi


def V(x):
    return 0 if 0 < x < 1 else 1e6

N = 1000
L = 1.0
E_guess = 0.1

E, psi = solve_schrodinger(N, L, V, E_guess)

print(f"Found energy: {E}")
`
    }
/>

<References />
</CitationProvider>
