import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
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
