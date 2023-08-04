const words = [
  {
    english: 'Essential',
    polish: 'Niezbędny',
  },
  {
    english: 'Versatile',
    polish: 'Wszechstronny',
  },
  {
    english: 'Executed',
    polish: 'Wykonany',
  },
  {
    english: 'Accumulate',
    polish: 'Gromadzić',
  },
  {
    english: 'Boil to',
    polish: 'Sprowadzić',
  },
];

export default function App() {
  return (
    <>
      <header>
        <h1 className='heading'>kris personal english words teacher</h1>
      </header>
      <main className='words-wrapper'>
        {words.map((word) => (
          <div className='words-card english-side' key={word.english}>
            {word.english}
          </div>
        ))}
      </main>
    </>
  );
}
