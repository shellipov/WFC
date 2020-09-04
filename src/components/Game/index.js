/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { test, results } from './data';
// eslint-disable-next-line no-unused-vars
import css from './style.css';

function Game() {
  const [question, setQuestion] = useState(test[0]);
  const [counter, setCounter] = useState(1);
  const [testDone, setTestDone] = useState(false);
  const [result, setResult] = useState({ result: '', details: '' });
  const [userAnswer, setUserAnswer] = useState(0);
  const [userScore, setUserScore] = useState(0);

  function getValue(e) {
    setUserAnswer(e.target.value);
  }

  function game(e) {
    e.preventDefault();
    if (counter !== test.length && userAnswer !== 0) {
      setCounter(counter + 1);
      setUserScore(userScore + userAnswer * 1);
      setUserAnswer(0);
      setQuestion(test[counter]);
      const inputs = document.querySelectorAll('input');
      inputs.forEach((input) => input.checked = false);
    } else if (counter === test.length) {
      if (userScore > 10) {
        setResult(results[0]);
        setTestDone(true);
      } else if (userScore > 5) {
        setResult(results[1]);
        setTestDone(true);
      } else if (userScore > 0) {
        setResult(results[2]);
        setTestDone(true);
      }
    }
  }

  return (
    <>
      <div className="gameZone">

        <div className="title">
          <div className="titleText">ПРОЙДИ ТЕСТ</div>
          <div className="titleMessage">
            Значимость этих проблем настолько
            <br />
            очевидна, что постоянный
            <br />
            количественный рост и сфера нашей
            <br />
            активности позволяет оценить значение
            <br />
            новых предложений.
          </div>
        </div>

        <div id="game" className="game">

          {testDone
            ? (
              <>
                <div className="result">
                  По результатам теста вы
                  <div className="resultText">{result.result}</div>
                  <div className="detailsText">{result.details}</div>
                  <div className="shareDiv">
                    Поделится
                    <a target="_blank" href={`https://vk.com/share.php?url=https://dixy.ru/&title= Я прошел тест в Дикси. Как оказалось, я - ${result.result}&noparse=true`} className="share vk" />
                    <button className="share instagram" type="button" />
                    <button className="share facebook" type="button" />

                  </div>
                </div>
              </>
            )
            : (
              <>
                <form id="gameForm" onSubmit={game}>
                  <div className="formQuestion">{question.question}</div>
                  {question.options.map((option, index) => (
                    <div onChange={getValue} className="formOption">
                      <input className="radioOption" type="radio" name="answer" value={index + 1} />
                      {option}
                    </div>
                  ))}
                  <button className="gameButton" type="submit">ДАЛЕЕ</button>
                </form>
              </>
            )}
        </div>

      </div>
    </>
  );
}

export default Game;
