// Importing react
import React from 'react';
// Exporting the Feature component to use in the FeatureList component
export default class Feature extends React.Component {
  render() {
    // Styling rules for elements
    const feature = {
      display: 'inline-block'
    }
    const featureTitle = {
      color: '#2B00FF',
      fontSize: 35,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      textAlign: 'center',
      width: 330
    }
    const featureText = {
      fontSize: 20,
      paddingBottom: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
      textAlign: 'center'
    }
    return (
      <div class="feature" style={feature}>
        <h4 style={featureTitle}>{this.props.title}</h4>
        <p style={featureText}>{this.props.text}</p>
      </div>
    );
  }
}
