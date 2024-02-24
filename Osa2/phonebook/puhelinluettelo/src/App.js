import { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')

  const namesToShow = showAll
    ? persons.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase()))
    : persons


  const addName = (event) => {
    event.preventDefault()

    const isNameAlreadyAdded = persons.some(person => person.name === newName)

    if (isNameAlreadyAdded) {
      alert(`"${newName}" on jo luettelossa!`)
      return
    }

    const nameNumberObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons([...persons, nameNumberObject])
    setNewName('')

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setShowAll(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown names with: <input value={showAll} onChange={handleFilterChange} /></div>

      <h2>Add new person</h2>
      <form onSubmit={addName}>
        <div>name: <input
          value={newName}
          onChange={handleNameChange}
        /></div>
        <div>number: <input
          value={newNumber}
          onChange={handleNumberChange}
        /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {namesToShow.map(person =>
            <Person key={person.id} person={person} />
          )}
        </ul>
      </div>
    </div>
  )

}

export default App