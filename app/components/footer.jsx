import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <p>© {currentYear} Bernt Johansen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;