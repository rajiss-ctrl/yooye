import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-[#120800] text-white flex justify-between items-center p-4" aria-label="Main navigation">
      <Link href="/" className="">
      <Image
        src="/logo.png"
        alt="Vercel Logo"
        width={50}
        height={50}
      />
      </Link>
      <ul className="flex space-x-4 list-none">
        <li>
          <Link href="/about-me" className="hover:text-[#CBE3D2]">
            About Me
          </Link>
        </li>
        <li>
          <Link href="/agenda" className="hover:text-[#CBE3D2]">
            My Agenda
          </Link>
        </li>
        <li>
          <Link href="/contact-me" className="hover:text-[#CBE3D2]">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
