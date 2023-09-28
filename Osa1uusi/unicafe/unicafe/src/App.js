import { useState } from 'react'


const Statistics = (props) => (
  <div>
    <h3>Statistics</h3>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <br />
    <p>All: {props.total}</p>
    <p>Average: {props.average}</p>
    <p>Positive: {props.positive}%</p>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * -1)) / (good + bad + neutral)
  const positive = (good / (good + bad + neutral)) * 100

  const setToGood = newValue => {
    setGood(newValue)
  }
  const setToNeutral = newValue => {
    setNeutral(newValue)
  }
  const setToBad = newValue => {
    setBad(newValue)
  }


  //Alla laskuriapuri joka tarkistaa onko "total" yli 0, ennenkuin se näyttää Statistics osion
  let laskuriapuri = null

  if (total > 0) {
    laskuriapuri = (
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    );
  }


  return (
    <div>
      <h3>Give us feedback!</h3>
      <Button handleClick={() => setToGood(good + 1)} text="Sooooo good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad! Yuck!" />

      {laskuriapuri}

    </div>
  )
}

export default App