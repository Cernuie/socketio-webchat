import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import React from 'react'
import useLocalStorage from './hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';

function App() {
  const [id, setId] = useLocalStorage()

  const dashboard = (
    <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
    </ContactsProvider>
  )

  return (
      id ? dashboard : <Login onIdSubmit={setId} />
  )
}

export default App;
