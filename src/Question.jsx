import he from 'he'
import './Question.css'

export default function Question({question, incorrect_answers, correct_answer}) {
  const answerArray = incorrect_answers.slice()
  answerArray.splice(Math.floor(Math.random() * answerArray.length), 0, correct_answer)

  return (
    <div className="question">
      <p>{he.decode(question)}</p>
      <ul>
        {answerArray.map(item => {
            return <li>{he.decode(item)}</li>
        })}
      </ul>
      {/* <p>{he.decode(correct_answer)}</p> */}
    </div>
  )
}
