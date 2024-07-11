import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Customercare () {
    return (
        <div className="mt-7 w-1/3 border-r-8 m-7  border-gray-300 shadow-lg p-5">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faPhone} className="text-blue-200 text-2xl mr-2" />
                <h1 className="text-white text-4xl font-bold">24/7 Customer Care</h1>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image 
                    src='/5124556.jpg' 
                    alt="Customer Care" 
                    width={500} 
                    height={300}
                    className="object-cover"
                />
            </div>
        </div>
    );
}
