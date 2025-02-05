import React, { Component, Fragment } from "react";
import "./Card.scss";

export class Card extends Component {
  render() {
    let { title, urlToImage, author } = this.props;
    return (
      <Fragment>
        <div className="cards-child">
          <div className="card">
            <div className="img-card">
              <img src={urlToImage} alt="urlToImage" />
              <p>Science</p>
            </div>
            <div className="title">
              <h4>{title}</h4>
              <p>Author:{author}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
