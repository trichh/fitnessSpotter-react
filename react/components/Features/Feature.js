import React from 'react';

export default class Feature extends React.Component {
  render() {
    const feature = {
      display: 'inline-block'
    }
    const featureTitle = {
      color: '#2B00FF',
      fontSize: 35,
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      textAlign: 'center',
      width: 330
    }
    const featureText = {
      fontSize: 20,
      paddingBottom: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
      textAlign: 'center'
    }
    return (
      <div class="feature" style={feature}>
        <h4 style={featureTitle}>Add New Clients</h4>
        <p style={featureText}>When adding a new client, trainers are able to assign them custom workout plans, custom meal plans and give them assessments. Clients will have a  profile page that lists their workout plan, meal plan, client assessment and graph of progression.</p>
      </div>
    );
  }
}
