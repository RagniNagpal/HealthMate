// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from './dashboard-dark.png';
import listimage from './list-dark.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faUserDoctor,
  faUserNurse,
  faUserInjured,
  faUserTie,
  faCapsules
} from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0f172a] text-white">
      {/* Hero */}
      <div className="flex flex-col items-center text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to HealthMate</h1>
        <p className="text-lg mb-6 max-w-2xl">
          Manage your hospital operations, patient records, and more with our powerful hospital management system.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/signup')}
            className="px-6 py-2 border border-white rounded hover:bg-indigo-700"
          >
            New Patient
          </button>
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-2 border border-white rounded hover:bg-indigo-700"
          >
            Login to account
          </button>
        </div>
        <div className="mt-10">
          <img src={image} alt="dashboard" className="rounded shadow-lg max-w-full" />
        </div>
      </div>

      {/* Portals */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">Dedicated Portals for Every User</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: faCircleUser, title: "Admin Portal", desc: "Manage hospital resources." },
            { icon: faUserDoctor, title: "Doctor Portal", desc: "View records, schedule, prescribe." },
            { icon: faUserNurse, title: "Nurse Portal", desc: "Vitals and ward reports." },
            { icon: faUserInjured, title: "Patient Portal", desc: "Book, view test results." },
            { icon: faUserTie, title: "Reception Portal", desc: "Register, assign doctors." },
            { icon: faCapsules, title: "Pharmacy Portal", desc: "Track prescriptions and inventory." }
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="p-6 border border-indigo-500 rounded text-center hover:bg-indigo-900 transition"
            >
              <FontAwesomeIcon icon={icon} size="2x" className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm mb-4">{desc}</p>
              <button className="px-4 py-1 border border-white rounded">Login</button>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="py-16 px-4 bg-[#1e293b]">
        <h2 className="text-3xl text-center font-semibold mb-10">Enterprise-Grade Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border border-indigo-400 rounded">
            <h3 className="text-xl font-semibold mb-2">Hospital Operations</h3>
            <p>Streamline daily ops, resource allocation, staff management.</p>
          </div>
          <div className="p-6 border border-indigo-400 rounded">
            <h3 className="text-xl font-semibold mb-2">Data Security</h3>
            <p>HIPAA-compliant security to protect sensitive patient data.</p>
          </div>
          <div className="p-6 border border-indigo-400 rounded">
            <h3 className="text-xl font-semibold mb-2">Clinical Management</h3>
            <p>Optimize care workflow and patient tracking.</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center py-12">
        <img src={listimage} alt="dashboard preview" className="rounded shadow-lg max-w-full" />
      </div>

      {/* Stats */}
      <div className="flex justify-around py-10 bg-indigo-600 text-white text-center">
        {[
          ['100+', 'Hospitals'],
          ['10K+', 'Professionals'],
          ['1M+', 'Patients Served'],
          ['99.9%', 'Uptime'],
        ].map(([value, label], i) => (
          <div key={i}>
            <h2 className="text-2xl font-bold">{value}</h2>
            <p>{label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-semibold">Ready to Transform Your Hospital?</h2>
        <p className="text-gray-400 mt-4">Start using HealthMate now and experience better healthcare delivery.</p>
        <button className="mt-6 px-6 py-3 bg-cyan-400 text-black rounded hover:bg-cyan-500">
          Get Started
        </button>
      </div>

      {/* Footer */}
      <div className="bg-[#0f172a] text-gray-400 p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-2">HealthMate</h3>
          <p>Trusted enterprise hospital solution.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-2">Company</h3>
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
      <div className="text-center text-sm text-gray-500 py-4">
        © 2024 HealthMate. All rights reserved.
      </div>
    </div>
  );
};

export default HomePage;
