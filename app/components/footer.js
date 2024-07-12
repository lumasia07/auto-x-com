export default function Footer() {
    return (
        <div className="bg-gray-800 py-6">
            <div className="flex justify-center">
                <h1 className="text-white text-lg md:text-2xl">
                    &copy; {new Date().getFullYear()} autoX.com. All Rights Reserved.
                </h1>
            </div>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                <span className="text-gray-400">|</span>
                <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
        </div>
    );
}
