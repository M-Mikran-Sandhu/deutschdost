function WordCard({word}){
    return(
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">{word.level}</p>
            <h2 className="text-2xl font-bold">
                {word.article} {word.german}
            </h2>
            <p className="mt-2 text-gray-700">{word.english}</p>
            <p dir="rtl" lang="ur" className="mt-2 text-gray-600">{word.urdu}</p>

        </div>
    )
}