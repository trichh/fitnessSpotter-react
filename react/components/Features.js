import React from 'react';

import FeatureList from './Features/FeatureList';

export default class Features extends React.Component {
  render() {
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
