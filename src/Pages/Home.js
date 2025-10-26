import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../Assets/profile.jpg";
import "../index.css";

function Home() {
  return (
    <section className="relative overflow-hidden home-section flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-all duration-700">
      
      {/* Floating background gradient animation */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-black opacity-50 blur-3xl"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Text Section */}
      <motion.div
        className="home-text text-center md:text-left space-y-6 z-10"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm <span className="highlight text-blue-600 dark:text-blue-400">Sainey DANSO</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium min-h-[60px]">
          <Typewriter
            words={[
              "A Current Researcher in ML for IoT Networks",
              "An Embedded Systems & Robotics Engineer",
              "An Entrepreneur & Innovator",
              "A Tech Enthusiast & Advocate",
              "IoT for a Smarter Africa",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={0}
            delaySpeed={1500}
          />
        </h2>

        {/* Request CV Button */}
        <motion.a
          href="mailto:dansosainey4@gmail.com?subject=Request%20for%20CV&body=Hello%20Sainey,%0D%0AI%20would%20like%20to%20request%20a%20copy%20of%20your%20CV.%0D%0A%0D%0ARegards,%0D%0A"
          className="btn inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md font-semibold transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.08 }}
        >
          Request CV via Email
        </motion.a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative home-image mt-10 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src={profile}
          alt="SAINEY DANSO"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-2xl border-4 border-blue-600 dark:border-blue-400 object-cover"
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 dark:text-gray-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-transparent rounded-full" />
      </motion.div>
    </section>
  );
}

export default Home;
