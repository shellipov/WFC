import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import css from './style.css';

function Subscription() {
  const [name, setName] = useState('');
  const [email, seEmail] = useState('');
  const [flag, setFlag] = useState(false);

  function getName(e) {
    setName(e.target.value);
  }
  function getEmail(e) {
    seEmail(e.target.value);
  }
  async function sendForm(e) {
    e.preventDefault();
    const responce = await fetch('https://someapi/somethere', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    // eslint-disable-next-line no-unused-vars
    const resp = await responce.json();
    setFlag(true);
  }

  return (
    <div className="subscription">
      <h1 className="subscriptionTitle">ПОДПИСАТСЯ НА РАССЫЛКУ</h1>
      {flag
        ? (
          <>
            <div className="subscriptionSuccess">ПОДПИСКА ОФОРМЛЕНА</div>
          </>
        )
        : (
          <>
            <div className="subscriptionText">
              Значимость этих проблем настолько очевидна, что постоянный
              количественный рост и
              <br />
              сфера нашей активности позволяет оценить значение новых предложений.
            </div>
            <form onSubmit={sendForm} className="SubscriptionForm">
              <input onChange={getName} className="SubscriptionInput" type="text" placeholder="Имя" value={name} required />
              <input onChange={getEmail} className="SubscriptionInput" type="email" placeholder="E-mail" value={email} required />
              <button className="SubscriptionSubmit" type="submit">ПОДПИСАТЬСЯ</button>
            </form>
          </>
        )}
    </div>
  );
}

export default Subscription;
