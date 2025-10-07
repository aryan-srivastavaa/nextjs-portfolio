'use client'
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiPython,
    SiDjango, SiDocker, SiPostgresql, SiNodedotjs, SiExpress, SiNpm
} from 'react-icons/si';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
const techStack = [
    { icon: SiHtml5, label: 'HTML', color: 'text-orange-600' },
    { icon: SiCss3, label: 'CSS', color: 'text-blue-600' },
    { icon: SiJavascript, label: 'JavaScript', color: 'text-yellow-500' },
    { icon: SiReact, label: 'React', color: 'text-cyan-500' },
    { icon: SiNextdotjs, label: 'Next.js', color: 'text-black' },
    { icon: SiPython, label: 'Python', color: 'text-blue-500' },
    { icon: SiDjango, label: 'Django', color: 'text-green-800' },
    { icon: SiDocker, label: 'Docker', color: 'text-blue-400' },
    { icon: SiPostgresql, label: 'PostgreSQL', color: 'text-indigo-700' },
    { icon: SiNodedotjs, label: 'Node.js', color: 'text-green-600' },
    { icon: SiExpress, label: 'Express.js', color: 'text-gray-700' },
    { icon: SiNpm, label: 'npm', color: 'text-red-600' },

];
function DeskModel() {
    const group = useRef<THREE.Group>(null);
    const { scene } = useGLTF('/models/Desk.glb');

    return <primitive ref={group}
        object={scene}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        scale={[1, 1, 1]}
        dispose={null} />;
}
export default function WhatIDo() {
    return (
        <section id="about" className="min-h-screen pt-4 pb-0 px-4 md:px-16" >
            <h2 className="text-4xl font-bold text-center mb-6 text-[#d6d5d5]">About Me</h2>

            <div className="flex flex-col md:flex-row items-center mx-auto gap-10 bg-[#d6d5d5] p-6 pb-30 rounded-lg shadow-lg">
                <div className="w-full md:w-1/2 h-96">
                    <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
                        <ambientLight intensity={0.6} />
                        <directionalLight position={[2, 5, 2]} intensity={1} />
                        <Suspense fallback={null}>
                            <DeskModel />
                        </Suspense>
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 text-gray-700 text-lg space-y-6 ">
                    <p>
                        I am Aryan Srivastava, a passionate full-stack developer who thrives at the intersection of design and technology.
                        I specialize in building efficient, scalable, and beautiful web applications using the latest modern frameworks.
                        I enjoy turning complex problems into clean, user-friendly solutions and continuously learning new tools to stay ahead in the tech space.
                    </p>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
                        {techStack.map(({ icon: Icon, label, color }, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <Icon className={`text-5xl ${color} group-hover:scale-110 transition-transform cursor-pointer`} />
                                <span className="mt-2 text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* <div className="space-y-4">
        <p>✅ I build responsive and fast web apps using React, Next.js, and Tailwind CSS.</p>
        <p>✅ I develop scalable backends with Django and PostgreSQL.</p>
        <p>✅ I work with Docker to containerize full-stack applications.</p>
        <p>✅ I ensure clean code, strong UI/UX, and production-ready systems.</p>
      </div> */}
                </div>
            </div>
        </section>


    );
}
