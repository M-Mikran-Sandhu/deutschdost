import {useState} from 'react'



function WordCard({word}){
    const [flipped, setFlipped]= useState(false)
    return(
        <button type="button" onClick={()=>setFlipped(!flipped)}
        className={'rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm'}>
            <p className="text-sm text-gray-500">{word.level}</p>

            {flipped ?(
        
                <div>
                    
                    <h2 className="text-2xl font-bold">
                        {word.article} {word.german}
                    </h2>
                    <p className="mt-2 text-gray-700">{word.english}</p>
                    <p dir="rtl" lang="ur" className="mt-2 text-gray-600 font-urdu text-xl leading-loose">
                        {word.urdu}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">{word.romanUrdu}</p>
                </div>
            ):(
                <h2 className="text-2xl font-bold">
                    {word.article} {word.german}
                </h2>
            )}
        
        </button>
        
    )
}

export default WordCard