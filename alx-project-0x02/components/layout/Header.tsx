import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold hover:text-blue-200">
            ALX Project
          </Link>
          <div className="space-x-4">
            <Link href="/home" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link href="/posts" className="hover:text-blue-200 transition-colors">
              Posts
            </Link>
            <Link href="/users" className="hover:text-blue-200 transition-colors">
              Users
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;