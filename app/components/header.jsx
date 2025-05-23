import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Left side: Home button */}
      <div>
        <Link href="/">
          <a className="text-lg font-bold">Bernt Johansen</a>
        </Link>
      </div>

      {/* Right side: Navigation links */}
      <nav className="flex space-x-4">
        <Link href="/">
          <a className="hover:underline">Hjem</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline">Om meg</a>
        </Link>
        <Link href="/projects">
          <a className="hover:underline">Prosjekter</a>
        </Link>
        <Link href="/contact">
          <a className="hover:underline">Kontakt meg</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;