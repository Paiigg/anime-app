import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiX, BiSearchAlt } from "react-icons/bi";

const Navbar = ({ searchAnime, query, setQuery }) => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearch = () => {
    setSearch(!search);
  };

  const navLink = [
    { title: "Home", link: "/" },
    { title: "Action", link: "/anime/action" },
    { title: "Adventure", link: "/anime/adventure" },
    { title: "Comedy", link: "/anime/comedy" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-primary ">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <h1 className="text-3xl font-bold ">Animex</h1>
            <ul className="hidden md:block">
              {navLink.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="px-4 text-gray-500 hover:text-white"
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </div>
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className={
              search
                ? "absolute top-[70px] w-full left-0 px-4"
                : "md:block hidden"
            }
          >
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyPress={searchAnime}
              type="text"
              className="rounded-full bg-secondary focus:outline-none pl-4 py-2 md:w-[375px] w-full"
              placeholder="Search a anime..."
            />
          </form>
          <div className="flex gap-3 items-center md:hidden">
            <BiSearchAlt size={30} onClick={handleSearch} />
            <div onClick={handleNav}>
              {nav ? <BiX size={30} /> : <BiMenu size={30} />}
            </div>
          </div>
          <ul
            className={
              nav
                ? "absolute top-[70px] bg-primary right-0 flex flex-col gap-5 py-5 w-full text-center ease-in-out duration-500"
                : "right-[-100%] top-[70px] absolute"
            }
          >
            {navLink.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="px-4 text-gray-500 hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
