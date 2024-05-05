import Question from './Question'
import './QuestionsList.css'


export default function Questions({questions, setQuestions}){
  console.log(questions)

  function selectedAnswer(id, index) {
    console.log(index)
    const updatedItems = questions.map(question => {
      if (question.id === id){
        console.log(question.id, id)
        return {...question, selectedAnswerIndex: [index]}
      }
      return question
    })
    console.log(updatedItems)
    // setQuestions(updatedItems)
  }

  return (
    <>
    {questions.map(question => {
      return (
      <Question key={question.id} {...question} selectedAnswer={selectedAnswer} />
      )
    })}

    <button className="check-answers">Check Answers</button>
    </>
  )
}
