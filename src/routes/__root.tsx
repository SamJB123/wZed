import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import "@/app/globals.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "wZed - Code Editor",
      },
      {
        name: "description",
        content:
          "Zed-inspired playground for Nodepod and browser-native Node.js workflows.",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
