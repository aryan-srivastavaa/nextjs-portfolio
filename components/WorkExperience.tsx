'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// import { FaChevronLeft } from 'react-icons/fa';
// import Link from 'next/link';
const experiences = [
  {
    company: 'CYRAN AI Solutions',
    logo: '/company-images/cyran.png',
    duration: 'Sep 2023 – Present',
    role: 'Software Engineer',
    description: [
      'Designed and developed multiple websites from scratch using React, Next, Tailwind, TypeScript, Django and PostgreSQL adhering to client specifications.',
      'Utilized a comprehensive tech stack including HTML, CSS, ThreeJS, JavaScript, React, Redux, Django, WebSockets, REST APIs and Docker to deliver responsive and scalable web applications, enhancing performance by 25%.',
    ],
  },
  {
    company: 'HashedIn by Deloitte',
    logo: '/company-images/hashedin.jpg',
    duration: 'May 2023 – Aug 2023',
    role: 'SDE Intern',
    description: [
      'Developed a responsive Netflix clone using React and Redux, featuring functionalities such as movie wishlist management, personalized recommendations, and user authentication (login/signup).',
      'Created an AI model with LangChain for document summarization and question answering, enabling users to obtain summaries and answers based on provided documents, reducing document processing time by 30%.',
      'Designed and implemented REST APIs using Java Spring Boot for a social media platform, facilitating CRUD operations for posts and comments.',
      'Gained hands-on experience with Python, Git, GitHub, and VSCode, enhancing development efficiency and version control skills.'
    ],
  },
];

export default function WorkExperience() {
  return (
    
      
      <section id='experience' className="py-10 px-4">

        <h2 className="text-4xl font-bold text-center mb-12 text-[#d6d5d5]">Work Experience</h2>

        <div className="space-y-10 max-w-4xl mx-auto ">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start gap-6 bg-[#d6d5d5] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={60}
                height={60}
                className="rounded-md object-contain"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">{exp.company}</h3>
                <p className="text-sm text-gray-600 mb-1">{exp.role}</p>
                <p className="text-sm text-gray-500 italic mb-2">{exp.duration}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    
  );
}
