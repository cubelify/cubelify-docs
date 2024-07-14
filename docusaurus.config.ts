import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"
import { themes } from "prism-react-renderer"


const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

const config: Config = {
  title: "Cubelify Docs",
  tagline: "A suite of Minecraft and Hypixel oriented tools",
  url: "https://docs.cubelify.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cubelify",
  projectName: "cubelify-docs",

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Cubelify Docs",
      logo: {
        alt: "Cubelify Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "https://cubelify.com",
          target: "_self",
          label: "Home",
        },
        {
          href: "https://discord.gg/cubelify",
          label: "Discord Community",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Cubelify. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  } satisfies Preset.ThemeConfig,
}

module.exports = config
