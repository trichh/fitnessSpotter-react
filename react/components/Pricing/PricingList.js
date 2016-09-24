import React from 'react';

import Price from './Price';
import PricingStore from '../../stores/PricingStore';

export default class PricingList extends React.Component {
  constructor() {
    super();
    this.getPricing = this.getPricing.bind(this);
    this.state = {
      pricing: PricingStore.getPricing()
    }
  }

  componentWillMount() {
    PricingStore.on('change', this.getPricing);
  }

  componentWillUnmount() {
    PricingStore.removeListener('change', this.getPricing);
  }

  getPricing() {
    this.setState({
      pricing: PricingStore.getPricing()
    });
  }

  render() {
    const pricingArticle = {
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
    const pricing = this.state.pricing;
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
