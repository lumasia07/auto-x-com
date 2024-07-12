"use client";

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './globals.css';
import Footer from './components/footer';
import Perks from './components/perks';
import Perkslist from './components/perkslist';
import Customercare from './components/customercare';
import Customerdesc from './components/customercaredesc';
import Carimports from './components/imports';
import Carimportsdesc from './components/importsdesc';
import Comission from './components/comission';
import Comissionsdesc from './components/commisiondes';
import Email from './components/email';
import Contacts from './components/contact';

const menuList = ['Sell a car', 'Buy a car'];

export default function Page() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex justify-between items-center p-4'>
        <div>
          <h1 className='font-bold text-3xl text-ellipsis text-white'>autoX.com</h1>
        </div>

        <div className='max-w-sm'>
    <ul className='flex space-x-0 divide-x divide-gray-500'>
        <li className='bg-black text-white px-2 py-1 text-sm md:px-4 md:py-2 md:text-base hover:cursor-pointer'>
            {menuList[0]}
        </li>
        <li className='bg-white text-black px-2 py-1 text-sm md:px-4 md:py-2 md:text-base hover:cursor-pointer'>
            {menuList[1]}
        </li>
    </ul>
</div>


      </div>
      <div className='flex justify-center p-4'>
        <input
          type='search'
          placeholder='Type a car model...e.g. Toyota, press Enter to search'
          className='w-full max-w-lg px-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-gray-900'
        />
      </div>
    <motion.div
      className='m-9 w-full max-w-2xl md:w-1/3 ml-auto border-l-8 p-6 md:p-8'
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={containerVariants}
    >
    <motion.h1 className='text-white text-4xl md:text-6xl font-bold' variants={itemVariants}>
        Safest way to own your dream car
    </motion.h1>
      <motion.h3 className='text-white mt-6 p-3 text-lg md:text-2xl font-semibold' variants={itemVariants}>
        Buy or sell your car with autoX.com for a fully immersive experience
      </motion.h3>
    </motion.div>

      <div className='flex justify-center m-8'>
        <Perks />
      </div>
      <div className='flex justify-center m-8'>
        <Customercare />
        <Customerdesc />
      </div>
      <div className='flex justify-center m-8'>
        <Carimportsdesc />
        <Carimports />
      </div>
      <div className='flex justify-center m-8'>
        <Comission />
        <Comissionsdesc />
      </div>
      <div>
        <Perkslist />
      </div>
      <div className='flex justify-center m-10'>
        <Email />
      </div>
      <div>
        <Contacts />
      </div>
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
}
