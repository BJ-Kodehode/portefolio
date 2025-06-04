import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 p-2 bg-gray-800 text-white">
      {/* Left side: Home button */}
      <div>
        <Link href="/">
          Bernt Johansen
        </Link>
      </div>

      {/* Right side: Navigation links */}
      <nav className="flex space-x-4">
        <Link href="/">
          Hjem
        </Link>
        <Link href="/#about">
          Om meg
        </Link>
        <Link href="/projects">
          Prosjekter
        </Link>
        <Link href="/contact">
          Kontakt meg
        </Link>
      </nav>
    </header>
  );
};

export default Header;