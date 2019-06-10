import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <h1>Developer Connector</h1>
      <p className="desc">
        Create a developer profile, share posts and get help from other
        developers.
      </p>
      <div className="buttons">
        <Link to="/register">
          <Button type="primary" style={{ marginRight: "16px" }}>
            Sign up
          </Button>
        </Link>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </section>
  );
};

export default Landing;
