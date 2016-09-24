import {EventEmitter} from 'events';

class PricingStore extends EventEmitter {
  constructor() {
      super();
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

  getPricing() {
    return this.pricing;
  }
}

const pricingStore = new PricingStore;

export default pricingStore;
