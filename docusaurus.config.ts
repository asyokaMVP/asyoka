import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const config: Config = {
  title: "Blog",
  favicon: "img/logo_mini.svg",

  url: "https://github.com/",
  baseUrl: "/asyoka/",

  organizationName: "asyokamvp",
  projectName: "asyoka",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'de'],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: 'en-GB'
  //     },
  //     de: {
  //       htmlLang: 'de-DE'
  //     },
  //   },
  // },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/asyokamvp/asyoka/tree/main",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,

        // For Docs using Chinese, it is recomended to set:
        // language: ["en", "de"],

        // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
        // forceIgnoreNoIndex: true,
      },
    ],
  ],

  themeConfig: {
    image: "img/logo.svg",
    navbar: {
      logo: {
        src: "img/logo.svg",
        className: "header-logo",
        href: "/",
      },
      items: [
        {
          type: "dropdown",
          label: "Blog",
          position: "left",
          items: [
            {
              label: "Product Planning",
              to: "/docs/ProductPlanning/introduction",
            },
            {
              label: "Product Design",
              to: "/docs/ProductDesign/introduction",
            },
            {
              label: "Product Metrics",
              to: "/docs/ProductMetrics/introduction",
            },
            {
              label: "Development & Launch",
              to: "/docs/Development&Launch/introduction",
            },
          ],
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          href: "https://github.com/asyokamvp",
          position: "right",
          className: "header-github-link header-gitlab-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [
            {
              label: "Github",
              href: "https://github.com/asyokamvp",
              className: "footer__link-github",
            },
          ],
        },
        {
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/technische-hochschule-augsburg/",
              className: "footer__link-linkedin",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Alina Kubenov | Powered by <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
