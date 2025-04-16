import { useState } from 'react'

// EXERCISES 1.12-1.14

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
  const [selected, setSelected] = useState(0)

  const randomSelect = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const increaseVote = () => {
    const copy = [ ...votes ]
    copy[selected] += 1
    console.log(copy)
    setVotes(copy)
  }

  const getLargest = () => {
    let largest = votes[0]
    let index = 0

    for (let i = 1; i < votes.length; i++){
      if (votes[i] > largest){
        largest = votes[i];
        index = i;  
      }
    }
    
    return index
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br></br>
      <button onClick={increaseVote}>vote</button>
      <button onClick={randomSelect}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[getLargest()]}
      <p>has {votes[getLargest()]} votes</p>
    </div>
  )
}



// EXERCISES 1.6-1.11

// const StatisticLine = ({text, value}) => {
  // return(
    // <tr>
      {/* <td>{text}</td> */}
      {/* <td>{value}</td> */}
    {/* </tr> */}
  // )
// }
// 
// const Statistics = ({good, neutral, bad}) => {
  // const getAverage = () => {
    // const goodScore = good * 1
    // const neutralScore = neutral * 0
    // const badScore = bad * -1
    // return (goodScore + neutralScore + badScore) / 3
  // }
  // 
  // const getPositive = () => {
    // return (good / (good + bad + neutral)) * 100 + ' %'
  // }
// 
  // if (good > 0 || neutral > 0 || bad > 0) {
    // return (
      // <table>
        {/* <tbody> */}
          {/* <StatisticLine text='good' value={good}/> */}
          {/* <StatisticLine text='neutral' value={neutral}/> */}
          {/* <StatisticLine text='bad' value={bad}/> */}
          {/* <StatisticLine text='all' value={good + neutral + bad}/> */}
          {/* <StatisticLine text='average' value={getAverage()}/> */}
          {/* <StatisticLine text='positive' value={getPositive() ? getPositive() : 0 + ' %'}/> */}
        {/* </tbody> */}
      {/* </table> */}
    // )
  // }
// 
  // return (
    // <p>No feedback given</p>
  // )
// 
// }
// 
// const Button = (props) => {
  // return (
    // <button onClick={props.onClick}>{props.text}</button>
  // )
// }
// 
// const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
// 
  // const handleGood = () => setGood(good + 1)
  // const handleNeutral = () => setNeutral(neutral + 1)
  // const handleBad = () => setBad(bad + 1)
// 
  // return (
    // <div>
      {/* <h1>give feedback</h1> */}
      {/* <Button onClick={handleGood} text='good'/> */}
      {/* <Button onClick={handleNeutral} text='neutral'/> */}
      {/* <Button onClick={handleBad} text='bad'/> */}
{/*  */}
      {/* <h1>statistics</h1> */}
      {/* <Statistics good={good} neutral={neutral} bad={bad} /> */}
    {/* </div> */}
  // )
// }

export default App