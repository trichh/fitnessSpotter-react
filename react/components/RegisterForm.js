// Import react
import React from 'react';
// Importing the AccountInfo component
import AccountInfo from './RegisterForm/AccountInfo';
import Header from './Header';
import PaymentInfo from './RegisterForm/PaymentInfo';
// Exporting the RegisterForm component to use in ../pages/Register.js
export default class RegisterForm extends React.Component {
  render() {
    return (
      <section id="register">
        <Header />
        <h2>Subscribe to Fitness Spotter</h2>
        <form method="post" action="/uploadUserImage" encType="multipart/form-data">
          <AccountInfo />
          <PaymentInfo />
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}
