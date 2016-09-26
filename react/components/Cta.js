// Importing  react and react features
import React from 'react';
import {Link} from 'react-router';
// Importing the Header component
import Header from '../components/Header';
// Exporting the Cta component to use in ../pages/Home.js
export default class Cta extends React.Component {
  render() {
    // Styling rules for elements
    const cta = {
      height: 700,
      width: '100%'
    }
    const ctaTitle = {
      color: 'white',
      margin: 0,
      textAlign: 'center',
      width: '100%'
    }
    const ctaTitleColor = {
      color: '#4AE012'
    }
    const ctaLinks = {
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      width: 375
    }
    const ctaLink = {
      borderRadius: 2,
      color: 'white',
      cursor: 'pointer',
      display: 'inline',
      fontSize: 30,
      paddingBottom: 5,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 5,
      textDecoration: 'none'
    }
    return (
      <section id="cta" style={cta}>
        <Header />
        <article>
          <h2 style={ctaTitle}><span style={ctaTitleColor}>Manage</span> your clients.</h2>
          <h2 style={ctaTitle}>Watch your clients and business <span style={ctaTitleColor}>GROW!</span></h2>
          <h2 style={ctaTitle}>Services <span style={ctaTitleColor}>free</span> until November 5, 2016.</h2>
          <div style={ctaLinks}>
            <a style={ctaLink} href="">Find gym</a>
            <Link style={ctaLink} to="register">Join now</Link>
          </div>
        </article>
      </section>
    );
  }
}
