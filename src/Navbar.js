import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex flex-row p-7 justify-between">
      <h1>logo</h1>
      <nav>
        <Link to="/" className="mr-3">home</Link>
        <Link to="/About">About</Link>
      </nav>
    </div>
  );
}
