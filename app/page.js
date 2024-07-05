import './globals.css';

const menuList = ['Sell a car', 'Buy a car'];

export default function Page() {
    return (
      <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between items-center p-4'>
          <div>
            <h1 className='font-bold text-3xl'>autoX.com</h1>
          </div>
          <div>
            <ul className='flex space-x-0 divide-x divide-gray-500'>
              <li className='bg-black text-white px-4 py-2 hover:cursor-pointer'>
                {menuList[0]}
              </li>
              <li className='bg-white text-black px-4 py-2 hover:cursor-pointer'>
                {menuList[1]}
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center p-4'>
          <input
            type='search'
            placeholder='Type a car model...e.g. Toyota'
            className='w-1/2 px-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-gray-900'
          />
        </div>
      </div>
    );
}
