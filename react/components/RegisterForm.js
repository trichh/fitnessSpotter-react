// Import react
import React from 'react';
// Importing the AccountInfo component
import AccountInfo from './RegisterForm/AccountInfo';
import Header from './Header';
import PaymentInfo from './RegisterForm/PaymentInfo';
// Exporting the RegisterForm component to use in ../pages/Register.js
export default class RegisterForm extends React.Component {
  render() {
    // Styling rules for elements
    const registerFormTitle = {
      color: 'white',
      fontSize: 40,
      marginLeft: 38
    }
    const registerForm = {
      marginLeft: 38
    }
    const submitButton = {
      backgroundColor: '#4AE012',
      border: 'solid 0 black',
      borderRadius: 2,
      cursor: 'pointer',
      display: 'block',
      fontSize: 24,
      marginBottom: 20,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 20,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5
    }
    return (
      <section id="register">
        <Header />
        <h2 style={registerFormTitle}>Subscribe to Fitness Spotter</h2>
        <form style={registerForm} method="post" action="/uploadUserImage" encType="multipart/form-data">
          <AccountInfo />
          <PaymentInfo />
          <button style={submitButton} type="submit">Submit</button>
        </form>
      </section>
    );
  }
}
