"use client";

import {Navbar} from './navbar';
import mainHero from '../public/images/mainhero.svg';
import logo from '../public/images/bg1.svg';
import MyComponent from './images';

const images = [
  { src: mainHero, alt: 'Description of image 1', width: 450, height: 250 },
  { src: logo, alt: 'Description of image 2', width: 500, height: 300 },
];

export default function Home() {
  return (
    <div className="bg-bgColor min-h-screen w-full">
      <Navbar />

      <div className='grid justify-center relative border'>
        <MyComponent image={images[0]} />

        <div className="writing-mode-vertical-rl rotate-90 absolute right-0 top-1/2 text-darkBrown font-liuJan">
        <span className='text-orange1'>code.</span>create.<span className='text-orange1'>innovate</span>
        </div>

        <div className='text-center mt-12'>
          <h2 className='text-xl font-semibold text-darkBrown'>JOHN XYRYL PEDROSA</h2>
          <h2 className='text-lg font-semibold text-orange1'>WEB DEVELOPER</h2>
          <button className='bg-darkBrown p-2 mt-2 text-slate-100 rounded text-sm px-6'>RESUME</button>
        </div>

      </div>

    </div>
  );
}
