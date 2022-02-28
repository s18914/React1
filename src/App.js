import Header from './components/Header'
import React from 'react'
import Button from './components/Button'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Button color='green'/>
      <Button color='red' text=':('/>
      <Button color='blue'/>
    </div>
  )
}

export default App;
