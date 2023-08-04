import { useState } from 'react';

const words = [
  {
    id: 1,
    english: 'Essential',
    polish: 'Niezbędny',
  },
  {
    id: 2,
    english: 'Versatile',
    polish: 'Wszechstronny',
  },
  {
    id: 3,
    english: 'Executed',
    polish: 'Wykonany',
  },
  {
    id: 4,
    english: 'Accumulate',
    polish: 'Gromadzić',
  },
  {
    id: 5,
    english: 'Boil to',
    polish: 'Sprowadzić',
  },
];

export default function App() {
  const [changeCard, setChangeCard] = useState('');

  function handleChangeCard(id) {
    setChangeCard(id !== changeCard ? id : null);
  }

  return (
    <>
      <header>
        <h1 className='heading'>kris personal english words teacher</h1>
      </header>
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
