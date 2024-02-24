import Person from './Person'

const Persons = ({ persons }) => {
    return (
        <div>
            <h2>Numbers</h2>
            <div>
                <ul>
                    {persons.map(person =>
                        <Person key={person.id} person={person} />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Persons