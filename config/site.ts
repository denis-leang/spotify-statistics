export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "denis-leang",
  description: "Denis's personal website!",
  navItems: [
    {
      label: "Home",
      href: "https://denis-leang.github.io/",
    },
    {
      label: "About",
      href: "https://denis-leang.github.io/about",
    },
    {
      label: "Resume",
      href: "https://denis-leang.github.io/resume",
    },
    {
      label: "Projects",
      href: "https://denis-leang.github.io/projects",
    },
  ],
  sidebarNavItems: [
    {
      category: "Analytics",
      items: [
        { label: "Activity", href: "/activity" },
        { label: "Trends", href: "/trends" },
      ],
    },
    {
      category: "Records",
      items: [
        { label: "Artists", href: "/top_artists" },
        { label: "Albums", href: "/top_albums" },
        { label: "Songs", href: "/top_songs" },
      ],
    },
  ],
  links: {
    github: "https://github.com/denis-leang",
    linkedin: "https://www.linkedin.com/in/denis-leang/",
  },
};
