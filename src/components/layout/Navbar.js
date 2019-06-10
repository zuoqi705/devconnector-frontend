import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <Button className="logobtn" type="link">
            DevConnector
          </Button>
        </Link>
      </div>
      <Link to="/profiles">
        <Button className="navbtn" type="link">
          Developers
        </Button>
      </Link>
      <Link to="/register">
        <Button className="navbtn" type="link">
          Register
        </Button>
      </Link>
      <Link to="login">
        <Button className="navbtn" type="link">
          Login
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
