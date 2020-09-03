import React from 'react';
// eslint-disable-next-line no-unused-vars
import css from './style.css';

function Info() {
  return (
    <div className="info">
      <div className="string">

        <div className="square one">

          <div className="logo" />
          <div className="text1">ЗАЛЕПИСЬ</div>
          <div className="text2">ЦЕНА</div>
          <div className="text3">с 17 февраля по 8 марта 2020 г.</div>
        </div>

        <div className="square two">
          <div className="logo1" />
          <div className="text4">
            Получите
            <br />
            на кассе купон
            <br />
            со скидками
            {' '}
            <span className="specialFont">**</span>
          </div>
          <div className="text5">
            При покупке от 700 руб.
            <span className="specialFont">*</span>
          </div>
        </div>

        <div className="square three">
          <div className="photo" />

        </div>
      </div>
      <div className="string">

        <div className="square four">
          <div className="logo2" />
          <div className="text6">
            Выберите товар
            {' '}
            <span className="specialFont">***</span>
            <br />
            и наклейте
            <br />
            скидку
          </div>
        </div>
        <div className="doublesquare">
          <div className="text7 left">
            Наклейка
            <br />
            перекрывает
            <br />
            штрих-код
            <br />
            на упаковке
          </div>
          <div className="photo2" />
          <div className="text7">
            Наклейка
            <br />
            не перекрывает
            <br />
            штрих-код
            <br />
            на упаковке
          </div>
        </div>

      </div>
    </div>
  );
}

export default Info;
