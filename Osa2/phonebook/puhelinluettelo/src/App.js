import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import AddPerson from './components/AddPerson'
import CheckListInput from './components/CheckListInput'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const namesToShow = showAll
    ? persons.filter(person => person.name.toLowerCase().includes(showAll.toLowerCase()))
    : persons

  const addName = (event) => {
    event.preventDefault()

    const isNameAlreadyAdded = persons.find(person => person.name === newName)

    if (isNameAlreadyAdded) {
      if (window.confirm((`"${newName}" on jo luettelossa! Haluatko asettaa uuden numeron?`))) {
        changeNumber(isNameAlreadyAdded.id)
      }
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })

  }

  const deleteName = id => {

    personService
      .deleteperson(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })

  }

  const changeNumber = id => {
    const changedPerson = {
      ...persons.find(person => person.id === id),
      number: newNumber
    }

    personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        setNewName('')
        setNewNumber('')
      })

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
      <Persons persons={namesToShow} onDelete={deleteName} />
    </div>
  )

}

export default App