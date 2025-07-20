import React from 'react';
import './About.css';
import { AiOutlineTeam } from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { AiOutlineGlobal } from "react-icons/ai";


const About = () => {
  return (
    <div className="bg-[#0f172a] text-gray-400 p-8 gap-8">
      <div className="text-2xl text-center gap-2  ">
        <h1 className='text-white text-4xl font-bold'>About Us</h1>
        <p className='text-gray mt-3'>Leading the future of healthcare management</p>
      </div>

      <div className="about-boxes flex flex-row justify-center gap-6 p-6 bg-gray-900 rounded-xl shadow-lg">
        <div className="box1 mt-6 p-6 border border-gray-700 rounded-lg bg-gray-800 text-white w-full max-w-md">
          <h1 className="font-bold text-white text-3xl mb-4">Our Mission</h1>
          <p className="text-gray-300">
            To revolutionize healthcare management by providing cutting-edge technology solutions
            that empower healthcare providers and enhance patient care.
          </p>
        </div>

        <div className='box1 mt-6 p-6 border border-gray-700 rounded-lg bg-gray-800 text-white w-full max-w-md center'>
          <h1 className='font-bold text-white text-3xl mb-4 '>Our Vision</h1>
          <p className='text-gray-300'>
            To be the global leader in healthcare management solutions, setting the standard for
            efficiency, security, and patient care excellence.
          </p>
        </div>
      </div>

    <div className="section flex flex-row text-center gap-4 justify-center mt-11 ">
      <div className='Team1 flex flex-col items-center max-w-xs p-4 bg-gray-900 rounded-xl shadow-lg'>
          <AiOutlineTeam size={40} className="mb-3 text-blue-400" />
        <h1 className="text-2xl font-bold mb-2">Expert Team</h1>
        <p className="text-gray-300">Led by healthcare and technology experts with decades of experience</p>
      </div>
      <div className='Team2 flex flex-col items-center max-w-xs p-4 bg-gray-900 rounded-xl shadow-lg'>
        <FiAward size={40} className="mb-3 text-blue-400"/>
        <h1 className="text-2xl font-bold mb-2">Industry Recognition</h1>
        <p className="text-gray-300">Multiple awards for innovation in healthcare technology</p>
      </div>
      <div className='Team3 flex flex-col items-center max-w-xs p-4 bg-gray-900 rounded-xl shadow-lg'>
        <AiOutlineGlobal size={40} className="mb-3 text-blue-400"/>
        <h1 className="text-2xl font-bold mb-2">Global Presence</h1>
        <p className="text-gray-300">Serving healthcare providers across multiple countries</p>
      </div>
    </div>
    
     {/* Footer */}
      
  <div className="gap-y-6 mt-11 flex flex-row gap-12 text-center justify-evenly ">
    <div>
      <h3 className="text-white font-bold mb-2 gap">HealthMate</h3>
      <p>Trusted enterprise hospital solution.</p>
    </div>
    <div>
      <h3 className="text-white font-bold mb-2 gap-y-4">Company</h3>
      <p>About Us<br />Contact Us<br />Features</p>
    </div>
    <div>
      <h3 className="text-white font-bold mb-2">Support</h3>
      <p>Help Center<br />Security</p>
    </div>
    <div>
      <h3 className="text-white font-bold mb-2">Legal</h3>
      <p>Privacy Policy<br />Terms</p>
    </div>
  </div>


      <div className="text-center text-sm text-gray-500 py-4 mt-12">
        © 2024 HealthMate. All rights reserved.
      </div>
    </div>
  );
};

export default About;
