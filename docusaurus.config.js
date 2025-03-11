// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Keldes CMS",
  tagline:
    "Aplikasi ini membantu mengelola data penduduk, pelayanan administrasi, dan informasi penting lainnya di kelurahan dan desa, sehingga pelayanan kepada masyarakat menjadi lebih mudah dan efisien.",
  favicon: "https://www.kojolah.com/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.nagori.id",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kojolahsandbox", // Usually your GitHub org/user name.
  projectName: "KeldesCMS", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkCE_6sEawK2U5UBBsr1gSL_7GQ872GGjQPnOqo8_QLm2QcrMd_KTPpHaPEYrKvFTpq5O7i9KnqoOrYJtPZ7pKXLePB8b8nS_F989dKncgzDHkcmIqr1oU5mVbGamUzTM4x8NxvDN7-8BUeDf7tiH5IyVzx5tEgFqTPwzJHyjnQSBmPQ2XBKbd5lTf8ic/s500/Kojolah%20Sandbox%20Logo%20Baru.png",
      navbar: {
        title: "Docs",
        logo: {
          alt: "Keldes CMS Docs Logo",
          src: "https://blogger.googleusercontent.com/img/a/AVvXsEixZJS-SkLfa8WnLJ8rZ3ADg5ln_QX1ql0VadsA7ioOypDFPnOh1ji6kRfT-aA8ojg8M9p4pCdjjrBErSkEn1N-jCjHTP_tlAafsHj-OUMRqoUp8XMfAMKl639hdN86bYq2zHwGX2MR74PtvlTTMzuuu5JhRVyrjenH5xROy2rLRmNtWl9WW44gCp5R=s250",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/aqiill",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Instagram",
                href: "https://instagram.com/kojolah",
              },
              {
                label: "X",
                href: "https://x.com/kojolah",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/aqiill",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Powered by Kojolah Sandbox.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
