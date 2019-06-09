import React from "react";
import { Button } from "antd";

const Landing = () => {
  return (
    <section className="landing">
      <h1>Developer Connector</h1>
      <p className="desc">
        Create a developer profile, share posts and get help from other
        developers.
      </p>
      <div className="buttons">
        <Button type="primary" href="/register" style={{ marginRight: "16px" }}>
          Sign up
        </Button>
        <Button href="/login">Login</Button>
      </div>
    </section>
  );
};

export default Landing;
