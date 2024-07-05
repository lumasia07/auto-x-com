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
        <div>
          {/* Other content */}
        </div>
      </div>
    );
}
