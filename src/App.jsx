import { useState } from 'react'
import words from './data/words.json'
import WordCard from './components/WordCard.jsx'

function App(){
  const[search,setSearch]=useState('')

  const filteredWords=words.filter((word)=> 
    word.german.toLowerCase().includes(search.toLowerCase()) ||
    word.english.toLowerCase().includes(search.toLowerCase())||
    word.urdu.toLowerCase().includes(Search.toLowerCase())
  )
  return(
    
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="mb-6 text-3xl font-bold">DeutschDost</h1>

      <input 
        type='text'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder="Search for a word....."
        className="mb-6 w-full rounded-lg border border-gray-300 p-3"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {filteredWords.map((word)=> (
          <WordCard key={word.id} word={word}/>
        ))}
      </div>
    </main>
  )
}

export default App
