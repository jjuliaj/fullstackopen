import { useState } from 'react'


const Statistics = (props) => (
  <div>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <br />
    <StatisticLine text="All" value={props.total} />
    <StatisticLine text="Average" value={props.average} />
    <StatisticLine text="Positive" value={props.positive} />
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <p>{props.text}: {props.value}</p>
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