import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeSimpleSlash } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Comission () {
    return (
        <div className="mt-7 w-1/3 border-r-8 m-7  border-gray-300 shadow-lg p-5">
            <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faHandshakeSimpleSlash} className="text-blue-200 text-2xl mr-2" />
                <h1 className="text-white text-4xl font-bold">6% referal commision</h1>
            </div>
            <div className="border rounded-lg overflow-hidden">
                <Image 
                    src='/cheerful-businesspeople-reaching-agreement.jpg' 
                    alt="Customer Care" 
                    width={500} 
                    height={200}
                    className="object-cover"
                />
            </div>
        </div>
    );
}
