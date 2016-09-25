import React from 'react';

export default class Contact extends React.Component {
  render() {
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
    if(this.props.title === "Social Media") {
      var textStyle = socialMedia;
      var icon = socialMedia;
    } else {
      var textStyle = contactText;
      var icon = {
        display: 'none'
      }
    }
    return (
      <div class="contact" style={contactWrapper}>
        <h4 style={contactType}>{this.props.title}</h4>
        <p style={textStyle}>{this.props.text}</p>
        <p style={icon}>@FitnessSpotter</p>
        <p style={icon}>@FitnessSpotter</p>
      </div>
    );
  }
}
