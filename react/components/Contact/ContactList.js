import React from 'react';

import Contact from './Contact';
import ContactStore from '../../stores/ContactStore';

export default class ContactList extends React.Component {
  constructor() {
    super();
    this.getContacts = this.getContacts.bind(this);
    this.state = {
      contacts: ContactStore.getContacts()
    }
  }

  componentWillMount() {
    ContactStore.on('change', this.getContacts);
  }

  componentWillUnmount() {
    ContactStore.removeListener('change', this.getContacts);
  }

  getContacts() {
    this.setState({
      contacts: ContactStore.getContacts()
    });
  }

  render() {
    const contactList = {
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
    const contacts = this.state.contacts;
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
