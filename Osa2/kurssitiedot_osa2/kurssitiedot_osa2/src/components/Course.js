
const Course = ({ course }) => {

    const summa = course.parts.reduce(
        (a, c) => a + c.exercises, 0
    )

    return (
        <div>
            <h1>{course.name}</h1>

            {course.parts.map(part =>
                <ul key={part.id}> <Part part={part} /> </ul>
            )}

            <ul>total of exercises {summa}</ul>

        </div>
    )
}

const Part = ({ part }) => {

    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )

}

export default Course

