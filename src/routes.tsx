import { createBrowserRouter } from "react-router-dom";
import PhotoBoard from "./pages/PhotoBoardPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      { path: "/", index: true, element: <HomePage /> },
      { path: "search/:query", element: <PhotoBoard /> },
    ],
  },
]);

export default router;
