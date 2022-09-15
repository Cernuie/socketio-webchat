import React, {useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import PropTypes from 'prop-types'

const ContactsContext = React.createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useLocalStorage('contacts', [])

  function createContact(id, name) {
    setContacts(prevContacts => {
      return [...prevContacts, { id, name }]
    })
  }
  
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}

ContactsProvider.propTypes = {
  children: PropTypes.any.isRequired
}
