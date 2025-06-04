import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import ModelViewer from './ModelViewer';
import ModelScene from './ModelScene';

function LandingPage() {
    return (
        <section className="bg-[#E8EBEE] flex flex-col md:flex-row items-center justify-center min-h-screen z-10  transition-all px-4 md:px-16 overflow-hidden">
            <div className="bg-[#F5F7FA] md:w-full  flex flex-row rounded-lg shadow-lg ">
                <div className='w-3/5 flex flex-col items-start justify-center p-8 md:p-16 space-y-6'>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800 ">Hi, I'm Aryan Srivastava</h1>
                    <h2 className="text-2xl sm:text-3xl font-medium mb-6 text-gray-600 ">Full Stack Developer</h2>


                    <div className="flex space-x-6 mt-4 text-2xl">
                        <a
                            href="https://github.com/aryan-srivastavaa"
                            target="_blank"
                            className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/aryan-srivastava-5bb7931a5/"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800 transition"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://x.com/AryanSr009"
                            target="_blank"
                            className="text-blue-400 hover:text-blue-600 transition"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://instagram.com/_aryan.srivastava"
                            target="_blank"
                            className="text-pink-500 hover:text-pink-700 transition"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="flex space-x-4 mt-6 flex-wrap gap-1">
                        <a
                            href="/contact"
                            className="relative inline-block px-6 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 shadow-md transform transition hover:scale-105 hover:shadow-xl"
                        >
                            Contact Me
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1j8BbZ1SuXCD85kfkteCZVaZdnM7UqkOP/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-block px-6 py-2 font-semibold text-blue-600 border-2 border-blue-500 rounded-md bg-white shadow-md transition transform hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white hover:scale-105 hover:shadow-xl"
                        >
                            View Resume
                        </a>
                    </div>

                </div>
                <div className='w-2/5 cursor-pointer' >
                    <ModelViewer />
                </div>


            </div>


        </section>
    )
}

export default LandingPage