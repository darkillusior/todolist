import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex gap-4 justify-between items-center">
        <Link href="/">
          <p className="dark:text-white text-xl font-bold">TODO App</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <p className="dark:text-white bg-blue-500 px-5 py-2  rounded-md shadow-md shadow-black hover:bg-blue-700 hover:text-gray-300">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/employees">
              <p className="dark:text-white bg-blue-500 px-5 py-2  rounded-md shadow-md shadow-black hover:bg-blue-700 hover:text-gray-300">Employees</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
