import { NavLink } from "react-router"
import './header.css'
import clglogo from '../assets/clglogo.png'
import bsthorat from '../assets/bsthorat.png'
import Carsole from "../pages/carsol"



export const Header =()=>{
    return <>
 <div className="header-nav">

      <div className="clglogo">
          <img src={clglogo} alt="Logo" />
      </div>

      <div className="clgdata">
        <p>बहुजन हिताय बहुजन सुखाय</p>
        <h3>Sahyadri Bahujan Vidya Prasarak Samaj's</h3>
        <h1>SAHAKAR MAHARSHI BHAUSAHEB SANTUJI THORAT COLLEGE OF ARTS, SCIENCE AND COMMERCE, SANGAMNER</h1>
        <h3>Tal-Sangamner, Dist-Ahmednagar, (422605) <span>NAAC Accredited 'B' Grade</span></h3>
      </div>

      <div className="thorat-img">
        <img src={bsthorat} alt="" />
      </div>
    </div>


    <div className="navbar">

    <div className="menus-container">
      <div className="menus">
         <NavLink to="/">  <a href="#">HOME</a></NavLink>
        </div>

        <div className="menus">
          <NavLink to="/about"><a href="#">ABOUT US</a></NavLink>
        </div>

        <div className="menus">
          <NavLink to="/naacnav"><a href="#">NAAC/IQAC</a></NavLink>
        </div>

        <div className="menus">
          <NavLink to=""><a href="#">COMMITTEES</a></NavLink>
        </div>

        <div className="menus">
          <NavLink><a href="#">ADMISSIONS</a></NavLink>
        </div>

        <div className="menus">
          <NavLink to="/dept"><a href="#">DEPARTMENTS</a></NavLink>
        </div>

        <div className="menus">
          <NavLink to="/examination"><a href="#">EXAMINATION</a></NavLink>
        </div>

        <div className="menus">
         <NavLink to=""> <a href="#">STUDENT CORNER</a></NavLink>
        </div>

        <div className="menus">
         <NavLink to=""> <a href="#">LIBRARY</a></NavLink>
        </div>

        <div className="menus">
         <NavLink to=""> <a href="#">ACTIVITIES</a></NavLink>
        </div>

        <div className="menus">
          <NavLink to=""><a href="#">FACILITIES</a></NavLink>
        </div>

        <div className="menus">
          <NavLink to=""><a href="#">RIT</a></NavLink>
        </div>

        <div className="menus">
         <NavLink to=""> <a href="#">ADMINISTRATIVE OFFICE</a></NavLink>
        </div>

        <div className="menus">
          <NavLink to=""><a href="#">CONTACT</a></NavLink>
        </div>
    </div>

    <div className="buttons">
      
       <h2>More</h2>
       <div className="more-hover">
        <div className="div">
            <a href="#">Student Login</a>
          <a href="#">Admin Login</a>
        </div>
       </div>
    </div>
         
    </div>

    </>
}