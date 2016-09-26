// Importing react
import React from 'react';
// Importing the Nav component
import Nav from './Header/Nav';
// Exporting the Header component to use in the Cta component
export default class Header extends React.Component {
  render() {
    // Style rule for element
    const logo = {
      display: 'inline-block',
      height: 56,
      marginTop: 18,
      padding: 0,
      textIndent: -9999,
      width: 350
    }
    return (
      <header>
      <a href="/"><h1 style={logo}>Fitness Spotter</h1></a>
      <Nav />
    </header>
    );
  }
}
