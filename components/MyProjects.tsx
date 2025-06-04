'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import {
    SiHtml5, SiCss3, SiThreedotjs, SiJavascript,
    SiNodedotjs, SiExpress, SiNextdotjs, SiReact,
    SiTailwindcss, SiDjango, SiMongodb, SiPostgresql, SiC,
} from 'react-icons/si';

const projects = [
    {
        title: 'Web Chat Application',
        image: '/projects/web-chat-app.png',
        description: 'This is a real time web chat app, where you can login/signup and chat with your connections in real time. I used Web Sockets to make this Project. Also I used MongoDB as database to store user credentials.',
        github: 'https://github.com/aryan-srivastavaa/Chat-Web-App',
        tech: [
            { icon: SiHtml5, color: 'text-orange-600' },
            { icon: SiCss3, color: 'text-blue-600' },
            { icon: SiJavascript, color: 'text-yellow-500' },
            { icon: SiNodedotjs, color: 'text-green-600' },
            { icon: SiExpress, color: 'text-gray-700' },
            { icon: SiMongodb, color: 'text-green-700' }
        ],
    },
    {
        title: 'News Web Application',
        image: '/projects/news-web-app.jpg',
        description: 'A real time news website, which tells current news going on across the globe. It uses News API to fetch the news and display it in a user friendly way. It also has a search functionality to search for news based on keywords.',
        github: 'https://github.com/aryan-srivastavaa/News-WebApp',
        tech: [
            { icon: SiReact, color: 'text-blue-500' },
            { icon: SiTailwindcss, color: 'text-teal-400' },
        ],
    },
    {
        title: 'Portfolio Website (Vanilla JS)',
        image: '/projects/portfolio-vanillaJS.png',
        description: 'A responsive portfolio website made using VanillaJS. It showcases my skills, projects, and contact information. The website is fully responsive and works on all devices.',
        github: 'https://github.com/aryan-srivastavaa/PortfolioWebsite',
        tech: [
            { icon: SiHtml5, color: 'text-orange-600' },
            { icon: SiCss3, color: 'text-blue-600' },
            { icon: SiJavascript, color: 'text-yellow-500' },
        ],
    },
    {
        title: 'Famous Algorithms',
        image: '/projects/algorithms.jpg',
        description: 'A web application that visualizes famous algorithms like Dijkstra\'s, Bellman Ford, and more.',
        github: 'https://github.com/aryan-srivastavaa/Algorithms',
        tech: [
            { icon: SiC, color: 'text-blue-500' },
        ],
    },
    {
        title: 'Portfolio Website (NextJS)',
        image: '/projects/portfolio-next.png',
        description: 'Personal portfolio built with Next.js and 3D animations showcasing skills and projects.',
        github: '#',
        tech: [
            { icon: SiNextdotjs, color: 'text-black' },
            { icon: SiTailwindcss, color: 'text-teal-400' },
            { icon: SiThreedotjs, color: 'text-purple-600' },
        ],
    },
];

const MyProjects = () => {
    return (
        
            
            <section id="projects" className="py-16 px-6 mb-14 md:px-16 bg-[#E8EBEE]">

                <h2 className="text-4xl font-bold text-center text-[#003366] mb-12">My Projects</h2>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={400}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 space-y-3">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="text-2xl text-gray-700 hover:text-black" />
                                    </a>
                                </div>
                                <p className="text-gray-600 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map(({ icon: Icon, color }, idx) => (
                                        <Icon key={idx} className={`text-xl ${color}`} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        
    );
};

export default MyProjects;
