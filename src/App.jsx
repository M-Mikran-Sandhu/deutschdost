import words from './data/words.json'
import WordCard from './components/WordCard.jsx'

function App(){
  return(
    <main className="mx-auto max-w-3x1 p-4">
      <h1 className="mb-6 text-3x1 font-bold">Deutsch Dost</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {words.map((word)=> (
          <WordCard key={word.id} word={word}/>
        ))}
      </div>
    </main>
  )
}

export default App
