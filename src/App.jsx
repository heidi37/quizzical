import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import QuestionsList from './QuestionsList'

function App() {
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)

  async function getQuestions(){
    const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple')
    const data = await response.json()
    setQuestions(data.results.map(item =>  {
      const answerArray = item.incorrect_answers.slice()
      answerArray.splice(Math.floor(Math.random() * 4), 0, item.correct_answer)
      return {...item, allAnswers: answerArray, id: nanoid(), selectedAnswerIndex: null}
    }))
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
      <QuestionsList questions={questions} setQuestions={setQuestions} score={score} setScore={setScore}/>
      }
      </div>
    </>
  )
}

export default App
