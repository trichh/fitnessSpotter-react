// Import react
import React from 'react';
// Exporting the PaymentInfo component to use in the RegisterForm component
export default class PaymentInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Payment info</h3>
        <label>Monthly plan</label>
        <div class="planWrapper">
          <div class="planContainer">
            <div id="basic">
              <h4>Baisc</h4>
              <p>$20</p>
            </div>
            <p>1 Trainer</p>
            <p>Unlimited clients</p>
            <p>All features</p>
          </div>
          <input type="radio" value="basic" />
        </div>
        <div class="planWrapper">
          <div class="planContainer">
            <div id="plus">
              <h4>Plus</h4>
              <p>$45</p>
            </div>
            <p>2-5 Trainers</p>
            <p>Unlimited clients</p>
            <p>All features</p>
          </div>
          <input type="radio" value="plus" />
        </div>
        <div class="planWrapper">
          <div class="planContainer">
            <div id="premium">
              <h4>Premium</h4>
              <p>$75</p>
            </div>
            <p>6+ Trainers</p>
            <p>Unlimited clients</p>
            <p>All features</p>
          </div>
          <input type="radio" value="premium" />
        </div>
        <label>Card holder name</label>
        <input type="text" name="cardName" />
        <label>Card number</label>
        <input type="text" name="cardNumber" />
        <label>Security code</label>
        <input type="text" name="securityCode" />
        <label>Expiration date</label>
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
