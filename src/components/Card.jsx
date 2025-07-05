

function Card(card) {
    return (
        <div className="flex flex-col items-center justify-center h-[90%] w-screen">
            <div className="flex flex-col max-w-[75ch] h-96 border-4 border-white p-8 mt-20 rounded-lg">
            <h3 className="text-3xl font-bold text-white mb-4">{card.type}</h3>
            <p className="text-lg max-w-[75ch] mb-5">{card.desc}</p>
            </div>

        </div>
        
    );
}
export default Card;