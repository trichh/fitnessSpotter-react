// Import react
import React from 'react';
// Exporting the AccountInfo component to use in the RegisterForm component
export default class AccountInfo extends React.Component {
  render() {
    const accountInfoTitle = {
      borderBottom: 'solid 1 white',
      color: 'white',
      fontSize: 25
    }
    const accountInfoLabel = {
      color: 'white',
      display: 'block',
      fontSize: 23,
      paddingBottom: 5
    }
    const accountInfoInput = {
      borderRadius: 2,
      height: 25,
      marginBottom: 10,
      width: 279
    }
    return (
      <div>
        <h3 style={accountInfoTitle}>Account info</h3>
        <label style={accountInfoLabel}>Email</label>
        <input style={accountInfoInput} type="text" name="email" />
        <label style={accountInfoLabel}>Password</label>
        <input style={accountInfoInput} type="password" name="password" />
        <label style={accountInfoLabel}>Your name/gym name</label>
        <input style={accountInfoInput} type="text" name="name" />
        <label style={accountInfoLabel}>Profile picture</label>
        <input type="file" id="profilePhoto" name="picture"/>
        <label style={accountInfoLabel}>Phone number</label>
        <input style={accountInfoInput} type="text" name="number" />
      </div>
    );
  }
}
