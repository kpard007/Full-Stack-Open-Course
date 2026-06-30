const Course = (props) => {
  console.log(props)
  return (  
    <div>
    <Header title = {props.courses[0].name}/>
    <Content parts = {props.courses[0].parts} /> 
    <Total total = {props.courses[0].parts}/>  

    <Header title = {props.courses[1].name}/>
    <Content parts = {props.courses[1].parts}/>
    <Total total = {props.courses[1].parts}/>
    </div>  
)
}

//RETURN IMPLICITO, ELIMINANDO EL USO DE '{}' Y UTILIZANDO SOLO '()'
const Header = (props) => ( 
  <h1> {props.title}</h1> 
)

const Part = (props) => (
  <li>
    {props.part.name} {props.part.exercises}
  </li>
)

//DESPLEGAR EL CONTENIDO DE COURSE, A TRAVES DE UN MAP E ITERANDO EN CADA POSICION
const Content = (props) => (
  <div>
    {props.parts.map(p => <Part key = {p.id} part={p} />)}
  </div>
)


const Total = ({ total }) => {
  const sumaTotal = total.reduce((s, p) => s + p.exercises, 0)

  return (
    <p>
      <strong>total of {sumaTotal} exercises</strong>
    </p>
  )
}

export default Course
