// Importing react
import React from 'react';
// Importing main component containers for the home page
import Contact from '../components/Contact';
import Cta from '../components/Cta';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
// Exporting the Home page to use in ../main.js as the index page on the "/" route
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
