// Importing EventEmitter
import {EventEmitter} from 'events';
// Pricing store sets and gets state to display price titles, prices, and number of trainers on the home page
class PricingStore extends EventEmitter {
  constructor() {
      super();
      // Setting state for prices
      this.pricing = [
        {
          planTitle: "Basic",
          planPrice: "$20",
          trainers: "1 Trainer"
        },
        {
          planTitle: "Plus",
          planPrice: "$45",
          trainers: "2-5 Trainers"
        },
        {
          planTitle: "Premium",
          planPrice: "$75",
          trainers: "6+ Trainers"
        }
      ];
  }
  // Gets all of the prices
  getPricing() {
    return this.pricing;
  }
}
// Instantiating class
const pricingStore = new PricingStore;
// Exporting store to use in the PricingList component
export default pricingStore;
