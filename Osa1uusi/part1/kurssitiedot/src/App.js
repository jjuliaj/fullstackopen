/**
 * Huom! Osa1 on kesken, aloitin vaan tehtäviä vähäsen etukäteen! Älkää huomioiko tätä, vaan pelkästään tuo 0 osio, jonka palautin.
 */

const App = () => {
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

  const Header = (props) => {
    return (
      <p>{props.course}</p>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
        <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
        <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
      </div>
    )
  }

  const Total = (props) => {
    return (
      <p>Total number of exercises: {props.total}</p>
    )
  }

  const Part = (props) => {
    return (
      <p>Part name: {props.part}, Number of exercises:{props.exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App