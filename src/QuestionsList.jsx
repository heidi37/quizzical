import Question from './Question'
import './QuestionsList.css'

export default function Questions({questions, setQuestions, score, setScore, getQuestions, answersSubmitted, setAnswersSubmitted}){


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
        setScore(prevScore => prevScore + 1)
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
    setAnswersSubmitted(true)
  }

  function restartGame(){
    console.log("Time to restart game")
    setScore(0)
    setAnswersSubmitted(false)
    getQuestions()
  }

  return (
    <>
    {questions.map(question => {
      return (
      <Question key={question.id} {...question} selectedAnswer={selectedAnswer} />
      )
    })}

    {answersSubmitted === true && <p>You scored {score}/5 correct answers</p>}
    {answersSubmitted === false && <button className="check-answers" onClick={checkAnswers}>Check Answers</button>}
    {answersSubmitted === true && <button className="check-answers" onClick={restartGame}>Play Again</button>}
    </>
  )
}
