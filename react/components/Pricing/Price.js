import React from 'react';

export default class Price extends React.Component {
  render() {
    const planWrapper = {
      display: 'inline-block',
      marginBottom: 10,
      width: 280
    }
    const planContainer = {
      marginBottom: 10
    }
    const plan = {
      borderBottom: 'solid 1 black'
    }
    const planTitle = {
      color: 'white',
      fontSize: 28,
      marginBottom: 10,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 10,
      padding: 0,
      textAlign: 'center'
    }
    const price = {
      color: 'white',
      fontSize: 55,
      marginBottom: 10,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      padding: 0,
      textAlign: 'center'
    }
    const perks = {
      color: 'white',
      fontSize: 23,
      padding: 0,
      textAlign: 'center'
    }
    let planId = this.props.title.toLowerCase();
    return (
      <div class="planWrapper" style={planWrapper}>
        <div class="planContainer" style={planContainer}>
          <div id={planId} style={plan}>
            <h4 style={planTitle}>{this.props.title}</h4>
            <p style={price}>{this.props.price}</p>
          </div>
          <p style={perks}>{this.props.trainers}</p>
          <p style={perks}>Unlimited clients</p>
          <p style={perks}>All features</p>
        </div>
      </div>
    );
  }
}
