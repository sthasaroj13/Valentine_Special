import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.tsx";
import YesPage from "./pages/YesPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/yes",
    element: <YesPage />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
