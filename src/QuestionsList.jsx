import { nanoid } from 'nanoid'
import Question from './Question'
import './QuestionsList.css'

export default function Questions({questions}){
  return (
    <>
    {questions.map(question => {
      return (
      <Question key={nanoid()} {...question} />
      )
    })}

    <button className="check-answers">Check Answers</button>
    </>
  )
}
