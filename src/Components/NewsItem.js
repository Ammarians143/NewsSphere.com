import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, auther,publishedAt} = this.props;
    return (
      <div className="container my-3">
        <div className="card">
          <img
            src={imageUrl}
            className="card-img-top"
            alt="img"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-body-secondary">{auther} and {publishedAt} mins ago</small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
