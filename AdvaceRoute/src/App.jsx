import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Nav from "./pages/navbar";
import Applayout from "./pages/applayout";

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout> </Applayout>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About />
        }, 
        {
          path:"/service",
          element:<Service />
        }
      ]
    },
  ])

  return ( <RouterProvider router={router}>


  </RouterProvider> );
}
 
export default App;