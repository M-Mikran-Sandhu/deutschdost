import { useState } from 'react'
import words from './data/words.json'
import WordCard from './components/WordCard.jsx'

function App(){
  const[search,setSearch]=useState('')

  const query = search.trim().toLowerCase()

  const filteredWords=words.filter((word)=> 
    word.german.toLowerCase().includes(query) ||
    word.english.toLowerCase().includes(query)||
    word.urdu.includes(query)||
    word.romanUrdu.toLowerCase().includes(query)
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
    {filteredWords.length === 0 ? (
      <p  className="rounded-2xl border border-dashed border-gray-300 p-6 text-center text-gray-500">
        "{search}" is not added yet. Try another word. 
      </p>
    ):(
        <div className="grid gap-4 sm:grid-cols-2">
          {filteredWords.map((word)=> (
            <WordCard key={word.id} word={word}/>
        ))}
      </div>
      )}
    </main>
  )
}

export default App
