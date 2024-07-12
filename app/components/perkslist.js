import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faPercentage, faToolbox } from '@fortawesome/free-solid-svg-icons';

export default function Perkslist() {
    return (
        <div className="flex flex-col items-center mt-4 pt-4">
            <div className='border-b-8 m-8 p-4'>
                <h1 className='text-white font-bold text-4xl'>Our Perks</h1>
            </div>
            <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full max-w-3xl">
                {[
                    { icon: faCar, text: "Free Insurance for a year" },
                    { icon: faPercentage, text: "30% off on 2nd purchase" },
                    { icon: faToolbox, text: "Free Auto-service" }
                ].map((perk, index) => (
                    <li key={index} className="flex-grow md:w-auto">
                        <div className="bg-gray-300 flex justify-center items-center h-48 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
                            <FontAwesomeIcon icon={perk.icon} className="text-black text-2xl mr-2" />
                            <p className="text-black text-xl">{perk.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
