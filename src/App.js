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
  {
    id: 6,
    english: 'Mutate',
    polish: 'Zmutować',
  },
  {
    id: 7,
    english: 'Underlying',
    polish: 'Zasadniczy',
  },
  {
    id: 8,
    english: 'Basically',
    polish: 'Podstawowy',
  },
  {
    id: 9,
    english: 'Imperative',
    polish: 'Pilny',
  },
  {
    id: 10,
    english: 'Traversing',
    polish: 'Przechodzenie',
  },
  {
    id: 11,
    english: 'Common',
    polish: 'Wspólny',
  },
  {
    id: 12,
    english: 'Ternary',
    polish: 'Potrójny',
  },
  {
    id: 13,
    english: 'Straightforward',
    polish: 'prosto',
  },
  {
    id: 14,
    english: 'Internal',
    polish: 'Wewnętrzny',
  },
  {
    id: 15,
    english: 'External',
    polish: 'Zewnętrzny',
  },
  {
    id: 16,
    english: 'Sufixx',
    polish: 'Przyrostek',
  },
  {
    id: 17,
    english: 'Derived',
    polish: 'Pochodny',
  },
  {
    id: 18,
    english: 'Deriving',
    polish: 'Pochodzący',
  },
  {
    id: 19,
    english: 'Explicitly',
    polish: 'Wyraźnie',
  },
  {
    id: 20,
    english: 'Internally',
    polish: 'Wewnętrznie',
  },
  {
    id: 21,
    english: 'Trigger',
    polish: 'Wywołać',
  },
  {
    id: 22,
    english: 'Batch',
    polish: 'Seria',
  },
  {
    id: 23,
    english: 'Inital',
    polish: 'Wstępny',
  },
  {
    id: 24,
    english: 'Reconcilition',
    polish: 'Pojednanie',
  },
  {
    id: 25,
    english: 'Reconciler',
    polish: 'Pojednawca',
  },
  {
    id: 26,
    english: 'Diffing',
    polish: 'Różniące się',
  },
  {
    id: 27,
    english: 'Associated',
    polish: 'Powiązany',
  },
  {
    id: 28,
    english: 'Chunks',
    polish: 'Kawałki',
  },
  {
    id: 29,
    english: 'Conccurent',
    polish: 'Równoległy',
  },
  {
    id: 30,
    english: 'Commit',
    polish: 'Popełniać',
  },
  {
    id: 31,
    english: 'Conjunction',
    polish: 'Spójnik',
  },
  {
    id: 32,
    english: 'In conjunction',
    polish: 'w połączeniu',
  },
  {
    id: 33,
    english: 'Accurate',
    polish: 'Dokładny',
  },
  {
    id: 34,
    english: 'Retain',
    polish: 'Zachować',
  },
  {
    id: 35,
    english: 'Inefficient',
    polish: 'Nieskuteczny',
  },
  {
    id: 36,
    english: 'Occupation',
    polish: 'Zawód',
  },
  {
    id: 37,
    english: 'Impure',
    polish: 'Zanieczyszczony',
  },
  {
    id: 38,
    english: 'Certain',
    polish: 'Pewien',
  },
  {
    id: 39,
    english: 'Stale',
    polish: 'Nieświeży',
  },
  {
    id: 40,
    english: 'Capturing',
    polish: 'Przechwytywanie',
  },
  {
    id: 41,
    english: 'Synthetic',
    polish: 'Syntetyczny',
  },
  {
    id: 42,
    english: 'Inconsistancy',
    polish: 'Niespójny',
  },
  {
    id: 43,
    english: 'Distinguish',
    polish: 'Odróżnić',
  },
];

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
