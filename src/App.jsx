import { useState, useEffect } from 'react'

import './App.css'
import QuestionsList from './QuestionsList'

function App() {
  const [questions, setQuestions] = useState([])

  async function getQuestions(){
    const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    const data = await response.json()
    setQuestions(data.results)
  }

  // useEffect(() => {
  //   getQuestions()
  // }
  // ,[])

  return (
    <>

    <div className="container">
      <div className="top-blob"></div>
      <div className="bottom-blob"></div>
      {questions.length === 0 ?
      <>
      <h1>Quizzical</h1>
      <p>Test your trivial knowledge!</p>
      <button onClick={getQuestions}>Start quiz</button>
      </>
      :
      <QuestionsList questions={questions}/>
      }
      </div>
    </>
  )
}

export default App
