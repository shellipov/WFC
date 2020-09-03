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
    } else if (counter === test.length) {
      console.log(userScore);
      if (userScore > 10) {
        setResult(results[0]);
        setTestDone(true);
        console.log('>10');
      }
      else if (userScore > 5) {
        setResult(results[1]);
        setTestDone(true);
        console.log('>5');
      }
      else if (userScore > 0) {
        setResult(results[2]);
        setTestDone(true);
        console.log('>0');
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
                    Полелится
                    <button className="share vk" type="button" />
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
