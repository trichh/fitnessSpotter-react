// Importing react
import React from 'react';
// Importing the ContactList component
import ContactList from './Contact/ContactList';
// Exporting the Contact component to use in ../pages/Home.js
export default class Contact extends React.Component {
  render() {
    // Styling rules for elements
    const contact = {
      backgroundColor: '#F5F8FA'
    }
    const contactTitle = {
      fontSize: 45,
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      paddingTop: 20,
      textAlign: 'center'
    }
    return (
      <section id="contact" style={contact}>
        <h3 style={contactTitle}>We Want To Hear From You!</h3>
        <ContactList />
      </section>
    );
  }
}
