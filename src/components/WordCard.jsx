function WordCard({word}){
    return(
        <div className="rounded-2x1 border border-grey-200 bg-white p-5 shadow-sm">
            <p className="test-sm text-grey-500">{word.level}</p>
            <h2 className="text-2x1 font-bold">
                {word.artical} {word.german}
            </h2>
            <p className="mt-2 text-grey-700">{word.english}</p>
            <p calssName="mt-2 text-grey-600">{word.urdu}</p>

        </div>
    )
}