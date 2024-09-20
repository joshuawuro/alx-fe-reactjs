import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router =
  createBrowserRouter[
    {
      path: "/",
      element: <Layout />,
      children: [],
    }
  ];
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
