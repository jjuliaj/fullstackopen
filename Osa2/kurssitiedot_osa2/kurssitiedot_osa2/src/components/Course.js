const Course = ({ course }) => {

    return (
        <div>
            <h1>{course.name}</h1>

            {course.parts.map(part =>
                <ul key={part.id}> <Part part={part} /> </ul>
            )}

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

