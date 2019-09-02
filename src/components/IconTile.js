import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconTile.scss";

class IconTile extends Component {
  render() {
    return (
      <div className="iconTile">
        <FontAwesomeIcon className="iconHeader" icon={this.props.icon} />
        <h4>{this.props.title}</h4>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default IconTile;
