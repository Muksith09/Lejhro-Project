import React from "react";
import '../Stylesheets/Footer.css'
// import { input } from 'mdb-ui-kit';s
const Footer = ()=> {
  return (
    <div className="footer-main-div" >
      <div className="footer-header" />
      <div className="footer-body">
        <div className="footer-body-container">
          <div className="footer-section">
            <h3>Company</h3>
            <a href="/">Innovations</a>
            <a href="/">Services</a>
            <a href='/'> Lejhro Recruiter</a>
            <a href="/">About</a>
            <a href="/">Blogs</a>
          </div>
          <div className="footer-section">
            <h3>Programs</h3>
            <a href='/'>Lejhro Bootcamp</a>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <a href="/">Contact</a>
            <a href="/">Terms of Use</a>
            <a href="/">Privacy Statement</a>
          </div>
          <div className="footer-section">
            <h3>Connect with us</h3>
            <div className="footer-section-connect">
              <a href='/'>Twitter icon </a>
              <a href='/'>facebook icon</a>
              <a href='/'>Linkedin icon</a>
              <a href='/'>Youtube icon</a>
            </div>
          </div>
        </div>
      </div>
      <p className="footer-copyright">
        © {new Date().getFullYear()} LEJHRO. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;