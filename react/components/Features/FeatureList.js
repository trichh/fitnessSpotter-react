// Importing react
import React from 'react';
// Importing the Feature component
import Feature from './Feature';
// Importing the FeaturesStore
import FeaturesStore from '../../stores/FeaturesStore';
// Exporting the FeatureList component to use in ../Features.js
export default class FeatureList extends React.Component {
  constructor() {
    super();
    // Binds getFeatures to this.getFeatures to prevent having to bind getFeatures multiple times
    this.getFeatures = this.getFeatures.bind(this);
    // Sets features state to all of the features from the FeaturesStore
    this.state = {
      features: FeaturesStore.getFeatures()
    }
  }
  // Gets features before the component mounts
  componentWillMount() {
    FeaturesStore.on('change', this.getFeatures);
  }
  // When the component unmounts remove the listener to prevent memory leaks and remove old components
  componentWillUnmount() {
    FeaturesStore.removeListener('change', this.getFeatures);
  }
  // Gets all  of the features from FeaturesStore and sets the state
  getFeatures() {
    this.setState({
      features: FeaturesStore.getFeatures()
    });
  }
  render() {
    // Style rule for element
    const featureList = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
    const features = this.state.features;
    // Gets half of the feature states to create two rows of three Feature components for design purposes
    let featuresHalfLength = features.length / 2;
    // Cuts half of the featuers from the features array
    let firstHalf = features.splice(0, featuresHalfLength);
    // Loops through the first half of the features from state to display the Feature component each time
    // Also passes title and text props to the Feature component to display unique titles and texts for each feature state
    const FeatureComponent1 = firstHalf.map((feature, i) => {
      return <Feature key={i} title={feature.title} text={feature.text} />;
    });
    // Loops through the remaining features from state to display the Feature component each time
    // Also passes title and text props to the Feature component to display unique titles and texts for each feature state
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
