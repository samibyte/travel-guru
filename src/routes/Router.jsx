import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      const res = await fetch("/destinations.json");
      const records = await res.json();
      return { records };
    },
    element: <HomeLayout />,
    hydrateFallbackElement: <h1> loading</h1>,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
