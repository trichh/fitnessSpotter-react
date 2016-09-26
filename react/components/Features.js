// Importing react
import React from 'react';
// Imporitng the FeatureList component
import FeatureList from './Features/FeatureList';
// Exporting the Features component to use in ../pages/Home.js
export default class Features extends React.Component {
  render() {
    // Styling rules for elements
    const features = {
      backgroundColor: '#F5F8FA'
    }
    const featuresTitle = {
      fontSize: 45,
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      paddingTop: 20,
      textAlign: 'center'
    }
    return (
      <section id="features" style={features}>
        <h3 style={featuresTitle}>Current Features</h3>
        <FeatureList />
      </section>
    );
  }
}
