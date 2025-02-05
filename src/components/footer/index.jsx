import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <p>
            Developer Telegram:
            <Link target="_blank" to={"https://t.me./darken_edit"}>
              Click
            </Link>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
