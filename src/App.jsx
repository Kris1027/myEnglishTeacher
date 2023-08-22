import { useState } from 'react';
import { words } from '../data/data';

export default function App() {
  const [changeCard, setChangeCard] = useState(null);

  function handleChangeCard(id) {
    setChangeCard(id !== changeCard ? id : null);
  }

  return (
    <>
      <header>
        <h1 className='heading'>kris personal english words teacher</h1>
      </header>
      <nav className='menu'>
        <button>1-20</button>
        <button>21-40</button>
        <button>41-60</button>
        <button>61-80</button>
        <button>81-100</button>
      </nav>
      <main className='words-wrapper'>
        {words.map((word) => (
          <div
            onClick={() => handleChangeCard(word.id)}
            className={`words-card ${
              word.id === changeCard ? 'polish-side' : 'english-side'
            }`}
            key={word.id}
          >
            {word.id === changeCard ? word.polish : word.english}
          </div>
        ))}
      </main>
    </>
  );
}
