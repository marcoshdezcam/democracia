export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tasky",
  description: "Simple & Beautiful task manager.",
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
