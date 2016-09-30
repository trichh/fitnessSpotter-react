// Import react
import React from 'react';
// Exporting the PaymentInfo component to use in the RegisterForm component
export default class PaymentInfo extends React.Component {
  render() {
    const paymentInfoTitle = {
      borderBottom: 'solid 1 white',
      color: 'white',
      fontSize: 25
    }
    const paymentInfoLabel = {
      color: 'white',
      display: 'block',
      fontSize: 23,
      paddingBottom: 5
    }
    const paymentInfoInput = {
      borderRadius: 2,
      height: 25,
      marginBottom: 10,
      width: 279
    }
    const planWrapper = {
      display: 'inline-block',
      marginBottom: 10,
      width: 280
    }
    const planContainer = {
      marginBottom: 10
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
    const paymentInfoRadio = {
      marginLeft: 130
    }
    return (
      <div>
        <h3 style={paymentInfoTitle}>Payment info</h3>
        <label style={paymentInfoLabel}>Monthly plan</label>
        <div class="planWrapper" style={planWrapper}>
          <div class="planContainer" style={planContainer}>
            <div class="plan">
              <h4 style={planTitle}>Baisc</h4>
              <p style={price}>$20</p>
            </div>
            <p style={perks}>1 Trainer</p>
            <p style={perks}>Unlimited clients</p>
            <p style={perks}>All features</p>
          </div>
          <input style={paymentInfoRadio} type="radio" value="basic" />
        </div>
        <div class="planWrapper" style={planWrapper}>
          <div class="planContainer" style={planContainer}>
            <div class="plan">
              <h4 style={planTitle}>Plus</h4>
              <p style={price}>$45</p>
            </div>
            <p style={perks}>2-5 Trainers</p>
            <p style={perks}>Unlimited clients</p>
            <p style={perks}>All features</p>
          </div>
          <input style={paymentInfoRadio} type="radio" value="plus" />
        </div>
        <div class="planWrapper" style={planWrapper}>
          <div class="planContainer" style={planContainer}>
            <div class="plan">
              <h4 style={planTitle}>Premium</h4>
              <p style={price}>$75</p>
            </div>
            <p style={perks}>6+ Trainers</p>
            <p style={perks}>Unlimited clients</p>
            <p style={perks}>All features</p>
          </div>
          <input style={paymentInfoRadio} type="radio" value="premium" />
        </div>
        <label style={paymentInfoLabel}>Card holder name</label>
        <input style={paymentInfoInput} type="text" name="cardName" />
        <label style={paymentInfoLabel}>Card number</label>
        <input style={paymentInfoInput} type="text" name="cardNumber" />
        <label style={paymentInfoLabel}>Security code</label>
        <input style={paymentInfoInput} type="text" name="securityCode" />
        <label style={paymentInfoLabel}>Expiration date</label>
        <select name="month">
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select name="year">
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
    );
  }
}
