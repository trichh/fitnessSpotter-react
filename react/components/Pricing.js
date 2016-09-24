import React from 'react';

import PricingList from './Pricing/PricingList';

export default class Pricing extends React.Component {
  render() {
    const pricingTitle = {
      color: 'white',
      fontSize: 45,
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      paddingTop: 20,
      textAlign: 'center'
    }
    return (
      <section id="pricing">
        <h3 style={pricingTitle}>Subscription Options</h3>
        <PricingList />
      </section>
    );
  }
}
