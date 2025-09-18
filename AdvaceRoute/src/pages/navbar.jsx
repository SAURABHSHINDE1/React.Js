import { NavLink } from 'react-router-dom';
import '../App.css'
const Nav = () => {
    return ( <>

     <div className="nav">
        <div className="logo">
            <h1>Design</h1>
        </div>
        <div className="menus">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
        </div>
    </div>
    
    
    </> );
}
  
export default Nav;