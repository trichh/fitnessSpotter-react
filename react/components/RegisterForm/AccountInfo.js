// Import react
import React from 'react';
// Exporting the AccountInfo component to use in the RegisterForm component
export default class AccountInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Account info</h3>
        <label>Email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Your name/gym name</label>
        <input type="text" name="name" />
        <label>Profile picture</label>
        <input type="file" id="profilePhoto" name="picture"/>
        <label>Phone number</label>
        <input type="text" name="number" />
      </div>
    );
  }
}
