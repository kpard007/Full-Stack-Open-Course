
 /*Mi reto para ti (Sin darte la solución):
Olvida el ejercicio por un segundo. Imagina que quieres crear un componente llamado Saludo.
¿Cómo escribirías la función Saludo para que reciba un nombre y diga "Hola [nombre]"? (Recuerda que el "sobre" se llama props).
¿Cómo llamarías a ese componente desde App para saludar a "Ken"?
Si logras entender ese pequeño saludo, habrás entendido el 90% de React. Las props son solo etiquetas en un sobre para pasar información de un componente padre a un componente hijo.
¿Te animas a intentar ese mini-ejercicio del Saludo? No te preocupes por el ejercicio 1.2 todavía. Cuéntame cómo lo escribirías. */

const Header = (props)=> {
  
  return(
    
      <h1>
        {props.course}
      </h1>
    
  )
}


const Part = (props) => {

    return (
        <div>
            <strong>
                {props.part} {props.exercise}
            </strong>
        </div>
    )
}

const Content = (props) => {
    
    return (
        <div>
            <Part part = {props.part1} exercise = {props.exercise1} />
            <Part part = {props.part2} exercise = {props.exercise2} />
            <Part part = {props.part3} exercise = {props.exercise3} />
        </div>
    )
}


const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}


const App = () =>{

  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3
 


  return(
    <div>
      <Header course={course} />
      <Content 
        part1 = {part1} exercises1 = {exercises1}
        part2 = {part2} exercises2 = {exercises2} 
        part3 = {part3} exercises3 = {exercises3}
      />
      <Total total = {total} />
      
    </div>  
  )
}

export default App