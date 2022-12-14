import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    { title: "Crime", link: "/anime/crime" },
    { title: "Dementia", link: "/anime/dementia" },
    { title: "Demons", link: "/anime/demons" },
    { title: "Drama", link: "/anime/drama" },
    { title: "Dub", link: "/anime/dub" },
    { title: "Ecchi", link: "/anime/ecchi" },
    { title: "Family", link: "/anime/family" },
    { title: "Fantasy", link: "/anime/fantasy" },
    { title: "Game", link: "/anime/game" },
    { title: "Gourmet", link: "/anime/gourmet" },
    { title: "Harem", link: "/anime/harem" },
    { title: "Historical", link: "/anime/historical" },
    { title: "Horror", link: "/anime/horror" },
    { title: "Josei", link: "/anime/josei" },
    { title: "Kids", link: "/anime/kids" },
    { title: "Magic", link: "/anime/magic" },
    { title: "Martial Arts", link: "/anime/martial-arts" },
    { title: "Mecha", link: "/anime/mecha" },
    { title: "Music", link: "/anime/music" },
    { title: "Mystery", link: "/anime/mystery" },
    { title: "Parody", link: "/anime/parody" },
    { title: "Police", link: "/anime/police" },
    { title: "Psychological", link: "/anime/psychological" },
    { title: "Romance", link: "/anime/romance" },
    { title: "Samurai", link: "/anime/samurai" },
    { title: "School", link: "/anime/school" },
    { title: "Sci-Fi", link: "/anime/sci-fi" },
    { title: "Seinen", link: "/anime/seinen" },
    { title: "Shoujo", link: "/anime/shoujo" },
    { title: "Shoujo-Ai", link: "/anime/shoujo-ai" },
    { title: "Shounen", link: "/anime/shounen" },
    { title: "Shounen-Ai", link: "/anime/shounen-ai" },
    { title: "Slice Of Life", link: "/anime/slice-of-life" },
    { title: "Space", link: "/anime/space" },
    { title: "Sports", link: "/anime/sports" },
    { title: "Super Power", link: "/anime/super-power" },
    { title: "Supernatural", link: "/anime/supernatural" },
    { title: "Suspense", link: "/anime/suspense" },
    { title: "Thriller", link: "/anime/Thriller" },
    { title: "Vampire", link: "/anime/vampire" },
    { title: "Yaoi", link: "/anime/yaoi" },
    { title: "Yuri", link: "/anime/yuri" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-primary  ">
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link to="/" className="text-3xl font-bold ">
              Animex
            </Link>
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
                ? "absolute top-[70px] bg-primary right-0 flex flex-col z-50 gap-5 py-5 w-full text-center ease-in-out duration-500"
                : "right-[-100%] top-[70px] absolute hidden"
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
