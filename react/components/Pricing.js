// Import react
import React from 'react';
// Importing the PricingList component
import PricingList from './Pricing/PricingList';
// Exporting the Pricing component to use in ../pages/Home.js
export default class Pricing extends React.Component {
  render() {
    // Styling rule for element
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
