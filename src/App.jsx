import './App.css';
import MoleContainer from './Components/MoleContainer'
import { useState } from 'react'

function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () =>  {
    let hills = []
    for(let i=0; i<9; i++) {
      hills.push(<MoleContainer key={i} score={score} setScore={setScore} />)
    }

    return (
      <div>
        { hills }
      </div>
    )
  }

  return (
    <div className="App">
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
