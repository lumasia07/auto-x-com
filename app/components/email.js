import React, { useState } from 'react';

export default function Email() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted email:', email);
    };

    return (
        <div>
            <div className='border-b-8 m-4 p-4 font-bold text-4xl'>
                <h1 className='text-white'>Subscribe to our newsletter</h1>
            </div>
            <form className="flex items-center" onSubmit={handleSubmit}>
            <input
                className="mt-6 flex-grow p-4 text-white border  border-gray-300 rounded-l-lg bg-inherit border-r-0 focus:outline-none focus:border-blue-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button
                className="p-4 mt-6 border border-l-0 text-white bg-blue-600 rounded-r-lg hover:bg-blue-700 transition duration-200"
                type="submit"
            >
                Subscribe
            </button>
        </form>
        </div>
        
    );
}
