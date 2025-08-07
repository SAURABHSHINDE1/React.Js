import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Applayout } from "./Applayout"
import { Home } from "./pages/Home"
import { About } from "./pages/about"
import Carsole from "./pages/carsol"
import Departments from "./pages/Department/dept"
import Naac from "./pages/Naccnav/naacnav/Naac"

const App=()=>{

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Applayout />,
      children:[
         {
      path:"/",
      element:<Home />,
      children:[{
        path:'/data',
        element:
      }]
    },
         {
      path:"/about",
      element:<About />,
    },
    {
      path:"/dept",
      element:<Departments />,
    },
     {
      path:"/naacnav",
      element:<Naac />,
    },
    
      ]
    },
   
  ])

  return <RouterProvider router={router}/>
}

export default App