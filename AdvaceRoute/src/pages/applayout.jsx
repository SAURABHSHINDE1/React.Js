import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Nav from "./navbar";

const Applayout = () => {
    return ( <>

    <Nav />

        <Outlet />

    <Footer></Footer>
    
    </> );
}
 
export default Applayout;