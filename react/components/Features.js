import React from 'react';

export default class Features extends React.Component {
  render() {
    const features = {
      backgroundColor: '#F5F8FA'
    }
    const featuresTitle = {
      fontSize: 45,
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      paddingTop: 20,
      textAlign: 'center'
    }
    const featureList = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
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
      <section id="features" style={features}>
        <h3 style={featuresTitle}>Current Features</h3>
        <article class="featureList" style={featureList}>
          <div class="feature" style={feature}>
            <h4 style={featureTitle}>Add New Clients</h4>
            <p style={featureText}>When adding a new client, trainers are able to assign them custom workout plans, custom meal plans and give them assessments. Clients will have a  profile page that lists their workout plan, meal plan, client assessment and graph of progression.</p>
          </div>
          <div class="feature" style={feature}>
            <h4 style={featureTitle}>Remove Clients</h4>
            <p style={featureText}>Trainers will be able to remove a client they dont train anymore. This will remove the client from the trainers dashboard and will also delete all of the clients information. Trainers will simply be able to delete a client straight from their dashboard.</p>
          </div>
          <div class="feature" style={feature}>
            <h4 style={featureTitle}>Client Assessments</h4>
            <p style={featureText}>Trainers can leave their clients or trainees an assessment. This is where trainers can tell their clients they’re doing a good job or they need to improve on something. Trainers can update the assessment directly from the clients profile page.</p>
          </div>
        </article>
        <article class="featureList" style={featureList}>
          <div class="feature" style={feature}>
            <h4 style={featureTitle}>Progress Graph</h4>
            <p style={featureText}>This line graph shows how much the client has progressed. The graph will encourage and motivate clients to keep coming back because they'll see they're improving and not wasting their time or money.</p>
          </div>
          <div class="feature" style={feature}>
            <h4 style={featureTitle}>Workout Plans</h4>
            <p style={featureText}>Allows trainers to give their clients customized workout plans that tell the client exactly what exercises they need to do. Workout plans will also make it easier for a new trainer to start working with a current client.</p>
          </div>
          <div class="feature" style={feature}>
            <h4 style={featureTitle}>Meal Plans</h4>
            <p style={featureText}>Allows trainers to give their clients customized meal plans. Its important to be able to customize meal plans because every client is trying to end up with different results and their meal plans could affect this.</p>
          </div>
        </article>
      </section>
    );
  }
}
