import he from 'he'
import './Question.css'

export default function Question({question, incorrect_answers, correct_answer, allAnswers, id, selectedAnswer}) {

  return (
    <div className="question">
      <p>{he.decode(question)}</p>
      <ul>
        {allAnswers.map((item, index) => {
            return <li key={index} onClick={() => selectedAnswer(id, index)}>{he.decode(item)}</li>
        })}
      </ul>
      <p>{he.decode(correct_answer)}</p>
    </div>
  )
}
