import Link from "next/link";
import { CiHome } from "react-icons/ci";
import { BiSolidDog } from "react-icons/bi";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white text-center p-4 flex items-center justify-center">
      <div className="max-w-screen-2xl flex-row flex justify-between w-full">
        <nav>
          <Link href="/">
            <h3 className="text-2xl">
              <CiHome />
            </h3>
          </Link>
        </nav>

        <div className="flex flex-row items-end">
          <Link
            href={"https://zsdynamics.com"}
            target="_blank"
            className="flex flex-row items-center  gap-4"
          >
            <h1>
              A React Component Collection
              <span className="hidden md:inline">by Zachary Sturman</span>
            </h1>
            <BiSolidDog />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
