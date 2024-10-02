export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Tasks",
      href: "/tasks",
    },
    {
      label: "New Task",
      href: "/new",
    },
  ],
  navMenuItems: [
    {
      label: "Tasks",
      href: "/tasks",
    },
    {
      label: "New Task",
      href: "/new",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/marcoshdezcam",
  },
};
