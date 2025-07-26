

export default function SkillsCard({ type, status, desc, color }) {

    const getProgressWidth = (status) => {
    switch (status) {
        case 'Beginner':
            return '30%';
        case 'Intermediate':
            return '60%';
        case 'Advanced':
            return '90%';
        case 'Expert':
            return '100%';
        default:
            return '0%';
    }
};
    const width = getProgressWidth(status);

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-auto h-auto">
            <h3 className="text-4xl font-bold mb-2">{type}</h3>
            <p className="text-xl font-medium text-gray-300 mb-2">{status}</p>

            {/* Progress bar */}
            <div className="w-[60%] bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                <div className="h-2.5 rounded-full"style={{ width, backgroundColor: color }}></div>
            </div>

            
            <p className="text-base text-gray-400 mt-10">{desc}</p>
        </div>
    );
}


