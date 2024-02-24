import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const isNameAlreadyAdded = persons.some(person => person.name === newName);

    if (isNameAlreadyAdded) {
      alert(`"${newName}" on jo luettelossa!`);
      return;
    }

    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons([...persons, nameObject])
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <input
          value={newName}
          onChange={handleNameChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
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

export default App