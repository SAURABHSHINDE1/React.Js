import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Applayout } from "./Applayout"
import { Home } from "./pages/Home"
import { About } from "./pages/about"
import Carsole from "./pages/carsol"

const App=()=>{

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout />,
      children:[
         {
      path:"/",
      element:<Home />,
    },
         {
      path:"/about",
      element:<About />,
    }
      ]
    },
   
  ])

  return <RouterProvider router={router}/>
}

export default App