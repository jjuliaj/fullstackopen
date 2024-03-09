import Person from './Person'

const Persons = ({ persons, onDelete }) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person =>
                    <li key={person.id}>
                        <Person person={person} />
                        <button onClick={() => onDelete(person.id)}>delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Persons