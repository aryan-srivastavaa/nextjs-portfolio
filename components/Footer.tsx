// components/Footer.tsx
'use client';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#003366] to-[#1A4D80] text-white py-6 px-6 md:px-16 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Aryan Srivastava. All rights reserved.</p>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
