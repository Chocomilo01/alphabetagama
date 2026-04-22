
import {
  Outlet,
  Link,
  createRootRoute,
  Scripts,
} from "@tanstack/react-router";

import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-2">Page not found</p>
        <Link to="/" className="mt-4 inline-block underline">
          Go home
        </Link>
      </div>
    </div>
  );
}

import { WhatsAppButton } from "../components/site/WhatsAppButton";
export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
     <>
      <Navbar />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />

      {/* ✅ ADD IT HERE */}
      <WhatsAppButton />

      <Scripts />
    </>
  );
}