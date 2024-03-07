import React from 'react'
import logoImg from '../assets/quiz-logo.png'

function Header() {
  return (
    <>
     <header>
      <h1>Quizz App</h1>
      <img src={logoImg}/>
    </header>
    <hr />
    </>
    
  )
}

export default Header