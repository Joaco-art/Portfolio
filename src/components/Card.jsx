import './global.css';

export default function Card(card) {
    return (
        <div className="relative w-full max-w-md min-w-[220px] p-5 flex flex-wrap justify-center">
            <div className="card-border-animation flex flex-col bg-[radial-gradient(ellipse_at_center,_#14151e_0%,_#000000_100%)] text-balance px-4 rounded-2xl shadow-2xl w-full h-64 md:h-80 justify-center gap-6">
                <h3 className="text-3xl font-semibold text-white">{card.type}</h3>
                <p className="text-lg text-gray-300">{card.desc}</p>
            </div>
        </div>
    );
}
