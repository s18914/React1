import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAdd}) => {
  const onClick = () => {
    console.log('+')
  }

  return (
    <header className='App-header'>
      <h1>Hejka!</h1>
      <Button color={showAdd ? 'red' : 'blue'} text={showAdd ? '-' : '+'} onClick={onAdd}/>
    </header>
  )
}

export default Header