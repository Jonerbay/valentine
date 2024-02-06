import { useState } from 'react'
import './App.css'

const phrases = [
  "Нет 🙉",
  "Ты уверена?",
  "Точно уверена😢",
  "Pretty Please🥺",
  "Я буду очень расстроен😕",
  "Я буду очень очень расстроен🫤",
  "Я буду очень очень очень очень расстроен🫤",
  "Все не буду больше спрашивать😥",
  "Шучу, просто скажи ДА🫠",
  "Ты разбиваешь мне сердце😭💔",
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  
  function handleYesClick() {
    setYesPressed(true)
  }
  function handleNoClick() {
    setNoCount(noCount+1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
          <div className='text'>Юхууууу !!!</div>
        </>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
          <div className='text'>Будешь ли моей валентинкой 🌹?</div>
          <div className='both-Button'>
            <button className='yesButton'
            style={{ fontSize: yesButtonSize , backgroundColor:'rgb(248, 229, 89)'}}
              onClick={handleYesClick}
            >
              Да 🙈
            </button>
            <button
              className='NoButton'
              style={{ }}
              onClick={handleNoClick}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
