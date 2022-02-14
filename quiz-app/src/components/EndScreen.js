import React, {useContext} from 'react'
import {QuizContext} from './helpers/context'
import '../App.css'
import {Questions} from './helpers/questionBank'


const EndScreen = () => {   
    
    const {score, setScore, setGameState} = useContext(QuizContext)
    const restartQuiz =()=>{
        setScore(0);
        setGameState("menu")
    }

    return (
        <div className='EndScreen'>
            {" "}
            <h1>Quiz is finished</h1>
            <h3>{score}/{Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen;