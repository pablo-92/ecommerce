import PaginaPrincipal from "./pages/PaginaPrincipal";
import EstilosGlobales from "./styles/EstilosGlobales";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaPrincipal />,
  },
]);

function App() {
  return (
    <>
      <EstilosGlobales />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
