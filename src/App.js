
// import './App.css';
import React, { useState } from "react";
import logo from "../src/assets/educorp-logo.png";
import "../src/assets/styles.css"

const EduCorpLanding = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="font-sans">
      {!showLogin && !showRegister ? (
        <>
          <header className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center py-10 relative">
            <div className="flex justify-center items-center mb-4">
              <img src={logo} alt="EduCorp Logo" className="w-25 h-10 sparkle-animation" />
            </div>
            <h1 className="text-4xl font-bold">Let's learn about new knowledge and abilities.</h1>
            <p className="mt-2 text-lg">Join EduCorp and explore a world of opportunities in online learning.</p>
            <button className="mt-4 bg-white text-pink-500 px-6 py-2 rounded-full font-semibold">Get Started</button>
            <button onClick={() => setShowLogin(true)} className="absolute top-5 right-5 bg-white text-pink-500 px-4 py-2 rounded-full font-semibold shadow-md">Login</button>
          </header>

          <section className="text-center py-10 overflow-hidden relative w-full">
            <h2 className="text-3xl font-bold">How is our tutoring service?</h2>
            <div className="flex mt-6 gap-6 w-full whitespace-nowrap overflow-hidden">
              <div className="flex animate-marquee space-x-6">
                {[
                  { title: "Interactive Learning", desc: "Engage in live classes with expert tutors." },
                  { title: "Expert Guidance", desc: "Learn from industry professionals." },
                  { title: "Creative Training", desc: "Enhance your skills with hands-on projects." }
                ].map((item, index) => (
                  <div key={index} className="p-6 border rounded-lg shadow-md min-w-[300px]">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-gray-100 text-center py-10">
            <h2 className="text-3xl font-bold">Access to learning anytime and anywhere</h2>
            <p className="mt-2">Study at your own pace with our flexible online courses.</p>
            <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-full font-semibold">Explore Courses</button>
          </section>
        </>
      ) : showLogin ? (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <input type="email" placeholder="Email" className="mb-3 p-2 border rounded w-80" />
          <input type="password" placeholder="Password" className="mb-3 p-2 border rounded w-80" />
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold w-80">Login</button>
          <p className="mt-4">Don't have an account? <span className="text-purple-500 cursor-pointer" onClick={() => { setShowLogin(false); setShowRegister(true); }}>Register</span></p>
          <button onClick={() => setShowLogin(false)} className="mt-4 text-red-500">Back</button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h2 className="text-3xl font-bold mb-4">Register</h2>
          <input type="text" placeholder="Full Name" className="mb-3 p-2 border rounded w-80" />
          <input type="email" placeholder="Email" className="mb-3 p-2 border rounded w-80" />
          <input type="password" placeholder="Password" className="mb-3 p-2 border rounded w-80" />
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold w-80">Register</button>
          <p className="mt-4">Already have an account? <span className="text-purple-500 cursor-pointer" onClick={() => { setShowRegister(false); setShowLogin(true); }}>Login</span></p>
          <button onClick={() => setShowRegister(false)} className="mt-4 text-red-500">Back</button>
        </div>
      )}
    </div>
  );
};

export default EduCorpLanding;

