const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    return (
      <p>{props.course}</p>
    )
  }

  const parts = [
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

  const Content = (props) => {
    return (
      <div>
        <Part part={part1} exercises={part1.exercises} />
        <Part part={part2} exercises={part2.exercises} />
        <Part part={part3} exercises={part3.exercises} />
      </div>
    )
  }

  const Total = (props) => {
    return (
      <p>Number of exercises {props.total}</p>
    )
  }

  const Part = (props) => {
    return (
      <p>{props.part} {props.exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App