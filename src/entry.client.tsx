import "./styles.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { createRoot } from "react-dom/client";

const router = createRouter({ routeTree });

const root = document.getElementById("root")!;
createRoot(root).render(<RouterProvider router={router} />);