import React from 'react';

import Contact from '../components/Contact';
import Cta from '../components/Cta';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Cta />
        <Features />
        <Pricing />
        <Contact />
      </div>
    );
  }
}
