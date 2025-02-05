import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ onSearch }) => {
  const handleInputChange = (event) => {
    if (onSearch) {
      onSearch(event.target.value.toLowerCase());
    }
  };

  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/business"}>Business</NavLink>
            <NavLink to={"/entertainment"}>Entertainment</NavLink>
            <NavLink to={"/general"}>General</NavLink>
            <NavLink to={"/health"}>Health</NavLink>
            <NavLink to={"/science"}>Science</NavLink>
            <NavLink to={"/sports"}>Sports</NavLink>
            <NavLink to={"/technology"}>Technology</NavLink>
          </ul>
        </nav>
        <form>
          <Form.Control
            type="search"
            placeholder="Searching..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
