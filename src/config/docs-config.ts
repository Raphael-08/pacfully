export type DocsConfig = {
  title: string;
  path?: string;
  pages?: DocsConfig[];
};

export const Pages: DocsConfig[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About US",
    path: "/about",
  },
  {
    title: "Contact US",
    path: "/contact",
  },
];

export const docsConfig: DocsConfig[] = [
  {
    title: "Pacfully",
    pages: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About US",
        path: "/about",
      },
      {
        title: "Contact US",
        path: "/contact",
      },
    ],
  },
];
