import React, {useState} from 'react';
import MainMenu from './components/MainMenu'
import EndScreen from './components/EndScreen'
import Quiz from './components/Quiz'
import {QuizContext} from './components/helpers/context'
const App = () => {

  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  
  return (
    <div className="App">
      <h1>REACT QUIZ</h1> 
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  )

}

export default App;


/*
class App extends Component {
  render() {

    return (
      <div className="App">
        Quiz App
      </div>
    );
  }
}

export default App;
*/