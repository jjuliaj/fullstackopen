import { useState } from 'react'
import Person from './components/Person'
import Persons from './components/Persons'
import AddPerson from './components/AddPerson'
import CheckListInput from './components/CheckListInput'

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
    setNewNumber('')
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
      <CheckListInput value={showAll} onChange={handleFilterChange} />
      <h2>Add new person</h2>
      <AddPerson
        newName={newName}
        newNumber={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={addName}
      />
      <Persons persons={namesToShow} />
    </div>
  )

}

export default App