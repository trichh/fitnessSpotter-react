// Importing react
import React from "react";
// Exporting Layout to use in ./main.js as parent component
export default class Layout extends React.Component {
  render() {
    // react-router places page in this.props.children
    return (this.props.children);
  }
}
