import React from 'react'
import Button from './Button'

const Header = () => {
  const onClick = () => {
    console.log(':)')
  }

  return (
    <header className='App-header'>
      <h1>Hejka!</h1>
      <Button color='blue' onClick={onClick}/>
    </header>
  )
}

export default Header