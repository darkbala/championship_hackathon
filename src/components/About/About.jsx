import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.scss';
import './About.css'
// import chipImage from 'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png';
// import amexImage from '../../assets/static/images/amex.png';
// import cardBg from '../../assets/static/images/your-card-background.jpeg'; // замените на актуальный путь

const About = () => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const handleCardNumberChange = (e) => setCardNumber(e.target.value);
  const handleCardNameChange = (e) => setCardName(e.target.value);
  const handleCardMonthChange = (e) => setCardMonth(e.target.value);
  const handleCardYearChange = (e) => setCardYear(e.target.value);
  const handleCardCvvChange = (e) => setCardCvv(e.target.value);

  const flipCard = (value) => setIsCardFlipped(value);

  return (
    <div className="card-container">
      <div className="card-wrapper"></div>

      <div className="form-container">
        <form action="#">
          <label htmlFor="number">Card Number</label>
          <input
            placeholder="XXXX  XXXX  XXXX  XXXX"
            type="text"
            name="number"
            id="number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          <label htmlFor="name">Name on Card</label>
          <input
            placeholder="Full Name"
            type="text"
            name="name"
            id="name"
            value={cardName}
            onChange={handleCardNameChange}
          /><br />

          <div className="cardForm-Field50">
            <label htmlFor="expiry">Expiry Date</label><br />
            <input
              placeholder="MM/YY"
              type="text"
              name="expiry"
              id="expiry"
              value={`${cardMonth}/${cardYear}`}
              onChange={(e) => {
                const [month, year] = e.target.value.split('/');
                setCardMonth(month);
                setCardYear(year);
              }}
              className="secondRow"
            />
          </div>
          <div className="cardForm-Field50">
            <label htmlFor="cvc">Security Code</label><br />
            <input
              placeholder="XXX"
              type="text"
              name="cvc"
              id="cvc"
              value={cardCvv}
              onChange={handleCardCvvChange}
              className="secondRow incorrectInfo"
            />
          </div>

          <label htmlFor="postal-code">Postal Code / ZIP</label>
          <input placeholder="XXX XXX" type="text" name="postal-code" id="postal-code" /><br />

          <input type="submit" value="[LOCK] Submit & Pay $500.00" className="button CardGood" />
        </form>
      </div>
    </div>
  );
};

export default About;
