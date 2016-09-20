import React from 'react';

import Feature from './Feature';

export default class FeatureList extends React.Component {
  render() {
    const featureList = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
    return (
      <div>
        <article class="featureList" style={featureList}>
          <Feature />
          <Feature />
          <Feature />
        </article>
        <article class="featureList" style={featureList}>
          <Feature />
          <Feature />
          <Feature />
        </article>
      </div>
    );
  }
}
