import { useState } from 'react'
 
const Button = ( { onClick, text }) =>{
  return (
    <button onClick={onClick}> 
        {text}
    </button>
  )
}

const Text = (props) =>{
  return (
    <h2>{props.text}</h2> 
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  
  const handleClickValue = () => {
    const newValue = Math.floor((Math.random() * anecdotes.length)) 
    setSelected (newValue) 
  }
  
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

 
  const handleClickVotes = () =>{
    const copy = [ ...votes ]
      copy[selected] += 1
      console.log(copy)
      setVotes(copy)
      
      for (let i = 0; i < copy.length; i++){
        if (copy[i] > copy[mostVotes]){
            setMostVotes(i)
        }
      }
  }

  return (  
    <div>
      <Text text = 'Anecdote of the day'/>
      {anecdotes[selected]} <br/>
      <p>has {votes[selected]} votes</p>
      <Button onClick = {handleClickVotes} text = 'vote'/>
      <Button onClick = {handleClickValue} text = 'next anecdote'/>
      

      <Text text = 'Anecdote with most votes'/>
      
      {anecdotes[mostVotes]} <br/>
      {votes[mostVotes]}
      
    </div>
  )
}

export default App