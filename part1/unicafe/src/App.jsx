/*
1.6: unicafe, paso 1

Como la mayoría de las empresas, Unicafe recopila comentarios de sus clientes. 
Tu tarea es implementar una aplicación web para recopilar comentarios de los clientes. 
Solo hay tres opciones para los comentarios: good (bueno), neutral y bad(malo).
La aplicación debe mostrar el número total de comentarios recopilados para cada categoría. 
Tu aplicación final podría verse así: 


1.7 unicafe paso 2
Amplía tu aplicación para que muestre más estadísticas sobre los comentarios recopilados: 
el número total de comentarios recopilados, 
la puntuación promedio (buena: 1, neutral: 0, mala: -1) 
y el porcentaje de comentarios positivos.
*/


import { useState } from 'react'

const Titles = ({ titles }) => {
    return (
        <h1>{titles}</h1>
    )
}


const Button = (props) =>{
  return (
    <button onClick={props.onClick}>
        {props.text}
    </button>
  )
}
const StatisticLine = (props)=>{
return(
  
     <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
     </tr>
  
)
}

const Statistics = (props) => {
  console.log(props)
  
  if (props.totalComents == 0){
    return(
      <p> No Feedback given </p>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticLine text = 'good' value = {props.good}/>
          <StatisticLine text = 'neutral' value = {props.neutral}/>
          <StatisticLine text = 'bad' value = {props.bad} />
          <StatisticLine text = 'all' value = {props.totalComents}/>
          <StatisticLine text = 'average' value = {props.totalAverage}/>
          <StatisticLine text = 'postive' value = {props.percentagePositive}/>
          </tbody>
       </table>
         
    )
  }
}



const App = () => {
  // guarda los clics de cada botón en su propio estado

  const titles = { 
    title: "give feedback",
    statistics: "statistics",
  }
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const decreaseBad = () => setBad(bad + 1)
  
  const totalComents = good + neutral + bad
  const totalAverage = ((good * 1) + (neutral * 0) + (bad * -1)) / totalComents
  const percentagePositive = ((good/totalComents) * 100) + '%'
  
  return (
    
    <div>

      <Titles titles = {titles.title}/>

      <Button onClick = {increaseGood} text = 'good'/>
      <Button onClick = {increaseNeutral} text = 'neutral'/>
      <Button onClick = {decreaseBad} text = 'bad'/>

      <Titles titles = {titles.statistics}/>
      
      <Statistics 
          good = {good}
          neutral = {neutral}
          bad = {bad}
          totalComents = {totalComents}
          totalAverage = {totalAverage}
          percentagePositive = {percentagePositive}
      />
        
    </div>
  )
}

export default App
