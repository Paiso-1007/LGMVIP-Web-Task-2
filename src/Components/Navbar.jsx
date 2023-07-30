
import React from "react";

const Navbar = ({ onGetUsers }) => {
  return (
    <nav className="navbar">
      {/* Brand Name as LVM  */}
      <div className="brand">Lets Grow More</div>
      <button onClick={onGetUsers}>Get Users</button>
    </nav>
  );
};

export default Navbar;
