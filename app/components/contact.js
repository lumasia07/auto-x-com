import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faX } from "@fortawesome/free-solid-svg-icons";

export default function Contacts() {
    return (
        <div className="bg-gray-800 p-6 md:p-8">
            <div className="border-b-8 mb-6 pb-3">
                <h1 className="text-white text-3xl md:text-4xl font-bold">Contact Us</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12">
                <div className="flex items-center border-b md:border-b-0 md:border-r-2 pr-8 last:border-b-0 md:last:border-r-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl mr-3" />
                    <h1 className="text-white text-base md:text-lg">Shoot us an email</h1>
                </div>
                <div className="flex items-center border-b md:border-b-0 md:border-r-2 pr-8 last:border-b-0 md:last:border-r-0">
                    <FontAwesomeIcon icon={faPhone} className="text-white text-2xl mr-3" />
                    <h1 className="text-white text-base md:text-lg">Call us on</h1>
                </div>
                <div className="flex items-center border-b md:border-b-0">
                    <FontAwesomeIcon icon={faX} className="text-white text-2xl mr-3" />
                    <h1 className="text-white text-base md:text-lg">Get in touch</h1>
                </div>
            </div>
        </div>
    );
}
