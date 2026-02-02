import { useState } from 'react'
import './App.css'

const phrases = [
  "Нет 🙉",
  "Ты уверена?",
  "Точно уверена😢",
  "Плиз плиз плиз🥺",
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

  // Edit your details here!
  const eventDetails = {
    date: "14-15 Февраля, 2026",
    location: "Боровое",
    dressCode: "Твоя самая красивая улыбка 😊"
  };

  function handleYesClick() {
    setYesPressed(true)
  }
  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <div className="success-view">
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear-Kissing" />
          <div className='text big'>Юхууууу !!! 🎉</div>

          {/* New Details Section */}
          <div className="details-card">
            <h3>До встречи на свидании!</h3>
            <p>📅 <strong>Дата:</strong> {eventDetails.date}</p>
            <p>📍 <strong>Место:</strong> {eventDetails.location}</p>
            <p>👗 <strong>Дресс-код:</strong> {eventDetails.dressCode}</p>
          </div>
        </div>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="bear with heart" />
          <div className='text'>Будешь ли моей валентинкой 🌹?</div>
          <div className='both-Button'>
            <button className='yesButton'
              style={{ fontSize: yesButtonSize, backgroundColor: 'rgb(248, 229, 89)' }}
              onClick={handleYesClick}
            >
              Да 🙈
            </button>
            <button
              className='NoButton'
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