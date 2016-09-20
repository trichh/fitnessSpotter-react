import React from 'react';

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
    const contactList = {
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
    const socialMedia = {
      fontSize: 20,
      height: 55,
      paddingBottom: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
      textAlign: 'center'
    }
    const contactWrapper = {
      display: 'inline-block'
    }
    const contactType = {
      color: '#2B00FF',
      fontSize: 35,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      textAlign: 'center',
      width: 330
    }
    const contactText = {
      fontSize: 20,
      paddingBottom: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
      textAlign: 'center'
    }
    return (
      <section id="contact" style={contact}>
      <h3 style={contactTitle}>We Want To Hear From You!</h3>
      <article class="contactList" style={contactList}>
        <div class="contact" style={contactWrapper}>
          <h4 style={contactType}>Customer Support</h4>
          <p style={contactText}>If you ever run into any problems and need some help fixing them, feel free to call our customer service hotline where we have people ready to talk to you 24/7 at 1-800-349-9482.</p>
        </div>
        <div class="contact" style={contactWrapper}>
          <h4 style={contactType}>Request Info</h4>
          <p style={contactText}>If you have any additional questions that you need to have answered, please call us at 1-800-458-9843 where we have people ready to talk to you 24/7.</p>
        </div>
        <div class="contact" style={contactWrapper}>
          <h4 style={contactType}>Social Media</h4>
          <p style={socialMedia}>@FitnessSpotter</p>
          <p style={socialMedia}>@FitnessSpotter</p>
          <p style={socialMedia}>@FitnessSpotter</p>
        </div>
      </article>
      </section>
    );
  }
}
