import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import QuestionsList from './QuestionsList'

function App() {
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [answersSubmitted, setAnswersSubmitted] = useState(false)

  async function getQuestions(){
    const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple&category=9')
    const data = await response.json()
    setQuestions(data.results.map(item =>  {
      const answerArray = item.incorrect_answers.slice()
      answerArray.splice(Math.floor(Math.random() * 4), 0, item.correct_answer)
      return {...item, allAnswers: answerArray, id: nanoid(), selectedAnswerIndex: null}
    }))
  }

  return (
    <>
      <div className="top-blob"></div>
      <div className="container">
      {questions.length === 0 ?
      <>
      <h1>Quizzical</h1>
      <p>Test your trivial knowledge!</p>
      <button onClick={getQuestions}>Start quiz</button>
      </>
      :
      <>
      <h1>Quizzical</h1>
      <QuestionsList questions={questions} setQuestions={setQuestions} score={score} setScore={setScore} getQuestions={getQuestions}
        answersSubmitted={answersSubmitted} setAnswersSubmitted={setAnswersSubmitted}
      />
      </>
      }
      </div>
      <div className="bottom-blob"></div>
    </>
  )
}

export default App
