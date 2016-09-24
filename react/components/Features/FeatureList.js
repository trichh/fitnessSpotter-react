import React from 'react';

import Feature from './Feature';
import FeaturesStore from '../../stores/FeaturesStore';

export default class FeatureList extends React.Component {
  constructor() {
    super();
    this.getFeatures = this.getFeatures.bind(this);
    this.state = {
      features: FeaturesStore.getFeatures()
    }
  }

  componentWillMount() {
    FeaturesStore.on('change', this.getFeatures);
  }

  componentWillUnmount() {
    FeaturesStore.removeListener('change', this.getFeatures);
  }

  getFeatures() {
    this.setState({
      features: FeaturesStore.getFeatures()
    });
  }

  render() {
    const featureList = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
    const features = this.state.features;
    let featuresHalfLength = features.length / 2;
    let firstHalf = features.splice(0, featuresHalfLength);
    const FeatureComponent1 = firstHalf.map((feature, i) => {
      return <Feature key={i} title={feature.title} text={feature.text} />;
    });
    const FeatureComponent2 = features.map((feature, i) => {
      return <Feature key={i} title={feature.title} text={feature.text} />;
    });
    return (
      <div>
        <article class="featureList" style={featureList}>
          {FeatureComponent1}
        </article>
        <article class="featureList" style={featureList}>
          {FeatureComponent2}
        </article>
      </div>
    );
  }
}
