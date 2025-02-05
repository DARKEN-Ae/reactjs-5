import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export class NotFoundPage extends Component {
  render() {
    return (
      <div className="not-section">
        <h1>Not found 404</h1>
        <Link to="/" className="back-to">
          Home
        </Link>
      </div>
    );
  }
}

export default NotFoundPage;
