'use client';
import { useState, useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Message from ${form.name}`;
        const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;
        const mailtoLink = `mailto:aryanfromjss@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        window.location.href = mailtoLink;
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <>
            {mounted ?

                <>
                    <Link href="/" passHref>
                        <div className="fixed top-5 left-5 z-50 inline-flex items-center gap-2 cursor-pointer group bg-[#d6d5d5]  hover:bg-[#d6d5d5] p-2 px-3 rounded-full transition">
                            <FaChevronLeft size={20} />
                            <span
                                className="ml-1 whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-[80px] group-hover:ml-2 transition-all duration-300 ease-in-out"
                            >
                                Go Back
                            </span>
                        </div>
                    </Link>
                    <section className="min-h-screen flex flex-col md:flex-row bg-[#000]" >

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
                                backgroundImage: "url('/contact-bg-3.gif')",
                            }}
                        >
                        </div>

                        {/* Right: Contact Form */}
                        <div className="w-full md:w-1/2 p-4 flex items-center justify-center bg-[#000] shadow-xl">
                            <form
                                onSubmit={handleSubmit}
                                className="w-full max-w-md space-y-6 bg-[#d6d5d5]   p-8 rounded-xl shadow-md"
                            >
                                <h2 className="text-3xl font-bold text-[#003366]">Contact Me</h2>

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 border dark:text-black border-black rounded-lg dark:placeholder:text-gray-400"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 border dark:text-black border-black rounded-lg dark:placeholder:text-gray-400"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                />

                                <textarea
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full p-3 border dark:text-black border-black rounded-lg dark:placeholder:text-gray-400"
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    required
                                />

                                <button
                                    type="submit"
                                    className="bg-[#003366] text-white px-6 py-3 rounded-lg hover:bg-[#002244] transition cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section></>
                : <></>}
        </>
    );
};

export default Contact;
