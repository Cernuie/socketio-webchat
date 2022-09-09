import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard'
import React from 'react'
import useLocalStorage from './hooks/useLocalStorage';
 
function App() {
  const [id, setId] = useLocalStorage()

  return (
      id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
  )
}

export default App;
