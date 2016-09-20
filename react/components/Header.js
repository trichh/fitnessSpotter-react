import React from 'react';

import Nav from './Header/Nav';

export default class Header extends React.Component {
  render() {
    const logo = {
      display: 'inline-block',
      height: 56,
      margin: 0,
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
