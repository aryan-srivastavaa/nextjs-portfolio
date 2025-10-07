'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Cedarville_Cursive } from 'next/font/google'

const cedarville = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin'],
})

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#000] text-white top-0 left-0 w-full shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className={`flex-shrink-0 text-xl font-bold dark:text-white `}>
                        <Link href="/" className={`${cedarville.className} hover:font-bold transition duration-200`}>Aryan Srivastava</Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="hover:underline dark:text-white">Home</Link>
                        <Link href="#about" className="hover:underline dark:text-white">About</Link>
                        <Link href="#projects" className="hover:underline dark:text-white">Projects</Link>
                        <Link href="#experience" className="hover:underline dark:text-white">Experience</Link>
                        {/* <Link href="/skills" className="hover:underline dark:text-white">Skills</Link> */}
                        <Link href="/contact" className="hover:underline dark:text-white">Contact</Link>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 dark:text-white focus:outline-none cursor-pointer"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-[#000]  shadow-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-6 flex flex-col space-y-4">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-white dark:text-white">Home</Link>
                    <Link href="#about" onClick={() => setIsOpen(false)} className="text-white dark:text-white">About</Link>
                    <Link href="#projects" onClick={() => setIsOpen(false)} className="text-white dark:text-white">Projects</Link>
                    <Link href="#experience" onClick={() => setIsOpen(false)} className="text-white dark:text-white">Experience</Link>
                    {/* <Link href="/skills" onClick={() => setIsOpen(false)} className="text-gray-800 dark:text-white">Skills</Link> */}
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white dark:text-white">Contact</Link>
                </div>
            </aside>
        </header>
    );
}