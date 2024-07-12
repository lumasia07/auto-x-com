import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faX } from "@fortawesome/free-solid-svg-icons";

export default function Contacts() {
    return (
        <div className="bg-gray-800 p-8">
            <div className="border-b-8 mb-8 pb-3">
                <h1 className="text-white text-4xl font-bold">Contact Us</h1>
            </div>
            <div className="flex justify-center space-x-12">
                <div className="flex items-center border-r-2 pr-8 last:border-r-0">
                    <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl mr-3" />
                    <h1 className="text-white">Shoot us an email</h1>
                </div>
                <div className="flex items-center border-r-2 pr-8 last:border-r-0">
                    <FontAwesomeIcon icon={faPhone} className="text-white text-2xl mr-3" />
                    <h1 className="text-white">Call us on</h1>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faX} className="text-white text-2xl mr-3" />
                    <h1 className="text-white">Get in touch</h1>
                </div>
            </div>
        </div>
    );
}
