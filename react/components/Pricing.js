import React from 'react';

export default class Pricing extends React.Component {
  render() {
    const pricingTitle = {
      color: 'white',
      fontSize: 45,
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0,
      paddingTop: 20,
      textAlign: 'center'
    }
    const pricingArticle = {
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 0
    }
    const planWrapper = {
      display: 'inline-block',
      marginBottom: 10,
      width: 280
    }
    const planContainer = {
      marginBottom: 10
    }
    const plan = {
      borderBottom: 'solid 1 black'
    }
    const planTitle = {
      color: 'white',
      fontSize: 28,
      marginBottom: 10,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 10,
      padding: 0,
      textAlign: 'center'
    }
    const price = {
      color: 'white',
      fontSize: 55,
      marginBottom: 10,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      padding: 0,
      textAlign: 'center'
    }
    const perks = {
      color: 'white',
      fontSize: 23,
      padding: 0,
      textAlign: 'center'
    }
    return (
      <section id="pricing">
        <h3 style={pricingTitle}>Subscription Options</h3>
        <article style={pricingArticle}>
          <div class="planWrapper" style={planWrapper}>
            <div class="planContainer" style={planContainer}>
              <div id="basic" style={plan}>
                <h4 style={planTitle}>Baisc</h4>
                <p style={price}>$20</p>
              </div>
              <p style={perks}>1 Trainer</p>
              <p style={perks}>Unlimited clients</p>
              <p style={perks}>All features</p>
            </div>
          </div>
          <div class="planWrapper" style={planWrapper}>
            <div class="planContainer" style={planContainer}>
              <div id="plus" style={plan}>
                <h4 style={planTitle}>Plus</h4>
                <p style={price}>$45</p>
              </div>
              <p style={perks}>2-5 Trainers</p>
              <p style={perks}>Unlimited clients</p>
              <p style={perks}>All features</p>
            </div>
          </div>
          <div class="planWrapper" style={planWrapper}>
            <div class="planContainer" style={planContainer}>
              <div id="premium" style={plan}>
                <h4 style={planTitle}>Premium</h4>
                <p style={price}>$75</p>
              </div>
              <p style={perks}>6+ Trainers</p>
              <p style={perks}>Unlimited clients</p>
              <p style={perks}>All features</p>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
