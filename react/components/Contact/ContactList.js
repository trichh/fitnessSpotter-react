// Importing react
import React from 'react';
// Importing the Contact component
import Contact from './Contact';
// Importing the ContactStore
import ContactStore from '../../stores/ContactStore';
// Exporting the ContactList component to use in ../Contact.js
export default class ContactList extends React.Component {
  constructor() {
    super();
    // Binds getContacts to this.getContacts to prevent having to bind getContacts multiple times
    this.getContacts = this.getContacts.bind(this);
    // Sets contacts state to all of the contacts from the ContactStore
    this.state = {
      contacts: ContactStore.getContacts()
    }
  }
  // Gets contacts before the component mounts
  componentWillMount() {
    ContactStore.on('change', this.getContacts);
  }
  // When the component unmounts remove the listener to prevent memory leaks and remove old components
  componentWillUnmount() {
    ContactStore.removeListener('change', this.getContacts);
  }
  // Gets all  of the contacts from ContactStore and sets the state
  getContacts() {
    this.setState({
      contacts: ContactStore.getContacts()
    });
  }
  render() {
    // Styling rules for elements
    const contactList = {
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
    const contacts = this.state.contacts;
    // Loops through all the contacts from state to display the Contact component each time
    // Also passes title and text props to the Contact component to display unique titles and texts for each contact state
    const ContactComponent = contacts.map((contact, i) => {
      return <Contact key={i} title={contact.title} text={contact.text} />;
    });
    return (
      <article class="contactList" style={contactList}>
        {ContactComponent}
      </article>
    );
  }
}
