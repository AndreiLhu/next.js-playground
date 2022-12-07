import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/blacklogo.png" width={120} height={100} />
      </div>
      {/* adding {" "} after link tag because link do not accept the <a></a> at the same time */}
      <Link href="/">
        {" "}
        <a>Home</a>
      </Link>
      <Link href="/about">
        {" "}
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        {" "}
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
