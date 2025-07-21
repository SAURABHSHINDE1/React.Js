import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

 export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-column">
          <h3>About Sahyadri</h3>
          <p>
            Sahyadri College of Arts, Commerce & Science, affiliated to the University of Mumbai, is dedicated to nurturing talent through quality education.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/faculty">Faculty</a></li>
            <li><a href="/admission">Admissions</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Sahyadri College</p>
          <p>Kolhapur, Maharashtra</p>
          <p>Email: info@sahyadricollege.in</p>
          <p>Phone: ‪+91 98765 43210‬</p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="facebook.com"><FaFacebookF /></a>
            <a href="facebook.com"><FaInstagram /></a>
            <a href="facebook.com"><FaTwitter /></a>
            <a href="facebook.com"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sahyadri College. All rights reserved.</p>
      </div>
    </footer>
  );
};


