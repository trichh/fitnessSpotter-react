// Importing react
import React from "react";
// Importing main component containers for the register page
import RegisterForm from '../components/RegisterForm';
// Exporting the Register page to use in ../main.js as the page on the "/register" route
export default class Register extends React.Component {
  render() {
    return (
      <div>
        <RegisterForm />
      </div>
    );
  }
}
