import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faPercentage } from '@fortawesome/free-solid-svg-icons';
import { faToolbox } from '@fortawesome/free-solid-svg-icons';



export default function Perkslist() {
  return (
    <div className="flex flex-col items-center mt-4 pt-4">
      <div className='border-b-8 m-8 p-4'>
        <h1 className='text-white font-bold text-4xl'>Our Perks</h1>
      </div>
      <ul className="flex flex-wrap justify-center space-x-4 w-full">
        <li className="w-full max-w-xs">
          <div className="bg-gray-300 flex justify-center items-center h-48 rounded-lg shadow-lg p-4">
            <FontAwesomeIcon icon={faCar} className="text-black text-2xl mr-2" />
            <p className="text-black text-xl">Free Insurance </p>
          </div>
        </li>
        <li className="w-full max-w-xs">
          <div className="bg-gray-300 flex justify-center items-center h-48 rounded-lg shadow-lg p-4">
            <FontAwesomeIcon icon={faPercentage} className="text-black text-2xl mr-2" />
            <p className="text-black text-xl">6% Commision on referral </p>
          </div>
        </li>
        <li className="w-full max-w-xs">
          <div className="bg-gray-300 flex justify-center items-center h-48 rounded-lg shadow-lg p-4">
            <FontAwesomeIcon icon={faToolbox} className="text-black text-2xl mr-2" />
            <p className="text-black text-xl">Free Auto-service</p>
          </div>
        </li>
        
      </ul>
    </div>
  );
}
