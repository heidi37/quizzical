import he from 'he'
import './Question.css'

export default function Question({question, allAnswers, id, selectedAnswerIndex, selectedAnswer, correct_answer, isCorrect, isChecked}) {

  return (
    <div className="question">
      <p>{he.decode(question)}</p>
      <ul>
        {allAnswers.map((item, index) => {
            return <li className={selectedAnswerIndex == index ? "selected-answer" : ""}
            style={isChecked && correct_answer === item ? { backgroundColor: "#94D7A2", borderColor: "#94D7A2" }
            : isChecked && !isCorrect && selectedAnswerIndex == index ? { backgroundColor: "#F8BCBC", borderColor: "#F8BCBC" }
            : {}}
            key={index} onClick={() => selectedAnswer(id, index)}>{he.decode(item)}</li>
        })}
      </ul>
    </div>
  )
}
