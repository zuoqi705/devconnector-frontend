import React from "react";
import { Button } from "antd";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Button className="logobtn" href="/" type="link">
          DevConnector
        </Button>
      </div>
      <Button className="navbtn" href="/profiles" type="link">
        Developers
      </Button>
      <Button className="navbtn" href="/register" type="link">
        Regiser
      </Button>
      <Button className="navbtn" href="/login" type="link">
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
