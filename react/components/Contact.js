import React from 'react';

import ContactList from './Contact/ContactList';

export default class Contact extends React.Component {
  render() {
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
