import React from "react";
import { Link } from "react-router-dom";

const GenresList = () => {
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
    <div>
      <div className="w-full md:overflow-x-hidden h-[80vh] no-scrollbar hidden md:block">
        <h2 className="text-2xl font-semibold">Genres</h2>
        <p className="text-gray-500">Swipe for more</p>
        <ul className="flex flex-col gap-3 mt-5 ">
          {navLink.map((item) => (
            <li>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GenresList;
