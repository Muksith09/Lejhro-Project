import React from "react";
import Sidebar from './Sidebar'
import '../Stylesheets/Header.css'

const Header = () => {
  return (
    <div className="top-header-header-div">
      <Sidebar />
      <div className="top-header-heading">
        <h2>Blogs</h2>
      </div>
    </div>
  );
};

export default Header;