import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import InteractiveStoryPage from "./pages/InteractiveStoryPage";
import CandidatForm from "./components/CandidatForm/CandidatForm";
import FormulaireEntr from "./pages/FormulaireEntr";
import SoulPhage from "./pages/SoulPhage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/entreprise",
        element: <FormulaireEntr />,
      },
      {
        path: "/game",
        element: <InteractiveStoryPage />,
      },
      {
        path: "/candidat",
        element: <CandidatForm />,
      },
      {
        path: "/soulphage",
        element: <SoulPhage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
