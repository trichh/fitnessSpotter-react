import React from 'react';

export default class Nav extends React.Component {
  render() {
    const nav = {
      display: 'inline-block',
      float: 'right',
      marginBottom: 30,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 30
    }
    const linkList = {
      display: 'inline-block',
      margin: 0,
      padding: 0
    }
    const hamburgerMenu = {
      cursor: 'pointer',
      height: 34,
      textIndent: -9999,
      width: 50,
    }
    const searchButton = {
      cursor: 'pointer',
      height: 25,
      textIndent: -9999,
      width: 50
    }
    const linkFont = {
      color: 'white',
      fontSize: 20,
      textDecoration: 'none'
    }
    const button = {
      backgroundColor: '#2B00FF',
      borderRadius: 3,
      cursor: 'pointer',
      paddingBottom: 5,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5
    }
    return (
      <nav style={nav}>
        <ul style={linkList}>
          <li style={hamburgerMenu}><a href="#">Menu</a></li>
          <li id="search" style={searchButton}><a href="#">Search for gyms or trainers</a></li>
          <li><a style={linkFont} href="#features">Features</a></li>
          <li><a style={linkFont} href="#pricing">Pricing</a></li>
          <li><a style={linkFont} href="#contact">Contact</a></li>
          <li><a style={linkFont} href="/login">Sign in</a></li>
          <li style={button}><a style={linkFont} href="/register">Sign up</a></li>
        </ul>
      </nav>
    );
  }
}
