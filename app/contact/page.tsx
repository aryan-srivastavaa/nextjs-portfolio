'use client';
// import { Canvas } from '@react-three/fiber';
// import {  useGLTF } from '@react-three/drei';
import { useState } from 'react';
// import emailjs from 'emailjs-com'; 
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
// const ContactModel = () => {
//     const { scene } = useGLTF('/models/contact.glb');
//     return <primitive object={scene} scale={[1, 1, 1]} rotation={[0, -Math.PI / 2, 0]} position={[0, -3, 0]} />;
// };

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // 👇 If you're using EmailJS:
    //     try {
    //       await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID');
    //       alert('Message sent!');
    //       setForm({ name: '', email: '', message: '' });
    //     } catch (err) {
    //       console.error(err);
    //       alert('Failed to send message');
    //     }
    //   };

    return (
        <>
            <Link href="/" passHref>
                <div className="fixed top-5 left-5 z-50 inline-flex items-center gap-2 cursor-pointer group hover:bg-gray-200 p-2 px-3 rounded-full transition">
                    <FaChevronLeft size={20} />
                    <span
                        className="ml-1 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[80px] group-hover:ml-2 transition-all duration-300 ease-in-out"
                    >
                        Go Back
                    </span>
                </div>
            </Link>
            <section className="min-h-screen flex flex-col md:flex-row bg-[#E8EBEE]" >

                {/* <div className="w-full md:w-1/2 h-96 md:h-auto">
                    <Canvas camera={{ position: [0, 1, 3], fov: 110 }}>
                        <color attach="background" args={['#e0e7ff']} /> 

                        <ambientLight intensity={1} />
                        <directionalLight position={[0, 10, 5]} />
                        <OrbitControls enableZoom={false} />
                        <ContactModel />
                    </Canvas> 
    
                </div> */}
                <div
                    className="w-full md:w-1/2 h-96 md:h-auto bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/contact-bg.gif')", // Replace with actual path
                    }}
                >
                    {/* You can also overlay anything here like 3D Canvas or leave it empty */}
                </div>

                {/* Right: Contact Form */}
                <div className="w-full md:w-1/2 p-4 flex items-center justify-center bg-white shadow-xl">
                    <form
                        //   onSubmit={handleSubmit}
                        className="w-full max-w-md space-y-6 bg-[#f9fafb]   p-8 rounded-xl shadow-md"
                    >
                        <h2 className="text-3xl font-bold text-[#003366]">Contact Me</h2>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />

                        <textarea
                            rows={4}
                            placeholder="Your Message"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            required
                        />

                        <button
                            type="submit"
                            className="bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#002244] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
