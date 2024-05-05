import Question from './Question'
import './QuestionsList.css'

let style;

export default function Questions({questions, setQuestions}){


  function selectedAnswer(id, index) {
    const updatedItems = questions.map(question => {
      if (question.id === id){
        return {...question, selectedAnswerIndex: [index]}
      }
      return question
    })
    setQuestions(updatedItems)
  }

  function checkAnswers(){
    const updatedQuestions = questions.map(question => {
      if (question.allAnswers[question.selectedAnswerIndex] === question.correct_answer){
        return {
          ...question,
          isCorrect: true,
          isChecked: true
        }
      }
      return {
        ...question,
        isChecked: true
      }
    })
    setQuestions(updatedQuestions)
    console.log(questions)
  }

  return (
    <>
    {questions.map(question => {
      return (
      <Question key={question.id} {...question} selectedAnswer={selectedAnswer} style={style} />
      )
    })}

    <button className="check-answers" onClick={checkAnswers}>Check Answers</button>
    </>
  )
}
