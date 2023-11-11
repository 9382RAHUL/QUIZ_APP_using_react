import React from 'react'

const Quizresult = (props) => {
  return (
    <>
        <div className='show-score'>
            Your score is : {props.score} <br />
            Total score: {props.totalscore}
        </div>
        <button id='next-button' onClick={props.tryagain}>Try again</button>
    </>
  )
}

export default Quizresult