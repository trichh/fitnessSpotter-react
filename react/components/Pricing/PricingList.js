// Importing react
import React from 'react';
// Importing the Price component
import Price from './Price';
// Importing the PricingStore
import PricingStore from '../../stores/PricingStore';
// Exporting the PricingList component to use in ../Pricing.js
export default class PricingList extends React.Component {
  constructor() {
    super();
    // Binds getPricing to this.getPricing to prevent having to bind getPricing multiple times
    this.getPricing = this.getPricing.bind(this);
    // Sets pricing state to all of the prices from the PricingStore
    this.state = {
      pricing: PricingStore.getPricing()
    }
  }
  // Gets pricing before the component mounts
  componentWillMount() {
    PricingStore.on('change', this.getPricing);
  }
  // When the component unmounts remove the listener to prevent memory leaks and remove old components
  componentWillUnmount() {
    PricingStore.removeListener('change', this.getPricing);
  }
  // Gets all  of the prices from PricingStore and sets the state
  getPricing() {
    this.setState({
      pricing: PricingStore.getPricing()
    });
  }
  render() {
    // Style rule for element
    const pricingArticle = {
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
    const pricing = this.state.pricing;
    // Loops through all the prices from state to display the Price component each time
    // Also passes title, price, and trainers props to the Price component to display unique titles, prices, and trainers for each price state
    const PricingComponent = pricing.map((price, i) => {
      return <Price key={i} title={price.planTitle} price={price.planPrice} trainers={price.trainers} />;
    });
    return (
      <article style={pricingArticle}>
        {PricingComponent}
      </article>
    );
  }
}
