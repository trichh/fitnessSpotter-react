import React from "react";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}
