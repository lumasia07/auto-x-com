import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Carimports() {
    return (
        <div className="mt-7 mx-auto max-w-sm md:max-w-md lg:max-w-lg shadow-lg p-5">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faShip} className="text-blue-200 text-2xl mr-2" />
                <h1 className="text-white text-3xl md:text-4xl font-bold">30-day Record Imports</h1>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image 
                    src='/11667334_20946019.jpg' 
                    alt="Customer Care" 
                    width={500} 
                    height={300}
                    className="object-cover"
                />
            </div>
        </div>
    );
}
