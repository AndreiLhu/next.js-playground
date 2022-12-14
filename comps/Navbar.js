import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/blacklogo.png" width={120} height={100} />
      </div>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/players">Players List</Link>
    </nav>
  );
};

export default Navbar;
