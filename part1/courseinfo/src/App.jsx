const Header = (props)=> {
  return(
    
      <h1>
        {props.course.name}
      </h1>
    
  )
}


const Part = (props) => {
  console.log(props)
    return (
      
        <div>
            <p>
                {props.name1}<br/>
                {props.excercise1}<br/>
                {props.name2}<br/>
                {props.excercise2}<br/>
                {props.name3}<br/>
                {props.excercise3}
            </p>
        </div>
    )   
}

const Content = (props) => {
    console.log(props)
    return (
        <div>   
            <Part  
                name1 = {props.course.parts[0].name} excercise1 = {props.course.parts[0].exercises}
                name2 = {props.course.parts[1].name} excercise2 = {props.course.parts[1].exercises}
                name3 = {props.course.parts[2].name} excercise3 = {props.course.parts[2].exercises}
            />
            
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
  
    const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  
  return(
    
    <div>
      <Header course = {course}/>
      <Content 
        course = {course}
      />
      <Total total = {total}/>
      
    </div>  
  )
}

export default App