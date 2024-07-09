import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <h1>Home</h1>
        <h1>
          <Link to="/about">About</Link>
        </h1>
      </div>
    </>
  );
};

export default Header;
