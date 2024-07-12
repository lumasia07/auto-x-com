import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Customercare() {
    return (
        <div className="mt-7 mx-auto max-w-md md:max-w-lg lg:max-w-xl border-r-8 border-gray-300 shadow-lg p-5">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faPhone} className="text-blue-200 text-2xl mr-2" />
                <h1 className="text-white text-3xl md:text-4xl font-bold">24/7 Customer Care</h1>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image 
                    src='/5124556.jpg' 
                    alt="Customer Care" 
                    width={500} 
                    height={200}
                    className="object-cover"
                />
            </div>
        </div>
    );
}
