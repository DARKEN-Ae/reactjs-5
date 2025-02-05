import React, { Component } from "react";
import LoadingGif from "../assets/img/loading.gif";

import "./Loading.scss";

export class Loading extends Component {
  render() {
    return (
      <div className="loading_gif">
        <img src={LoadingGif} alt="LoadingGif" />
      </div>
    );
  }
}

export default Loading;
