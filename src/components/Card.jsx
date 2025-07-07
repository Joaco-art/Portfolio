import './global.css';

export default function Card(card) {
    return (
        <div className="relative w-fit">
            <div className="card-border-animation flex flex-col bg-gray-800 p-4 rounded-xl shadow-lg w-2xs h-44 justify-around">
                <h3 className="text-2xl font-semibold text-white">{card.type}</h3>
                <p className="text-md text-gray-300">{card.desc}</p>
            </div>
        </div>
    );
}
