import React from "react";
import { Link } from "react-router-dom";

const Search = ({ search, div }) => {
  return (
    <div className={div ? "max-w-[1240px] mx-auto px-4" : "hidden"}>
      <div className="py-12">
        <h2 className="text-2xl font-semibold mb-5">Search Anime</h2>
        <div className="grid md:grid-cols-6 grid-cols-2 gap-3">
          {search?.map((item, idx) => (
            <div className="h-[400px] flex flex-col gap-3" key={idx}>
              <img
                src={item.animeImg}
                alt=""
                className="h-[250px] rounded-lg"
              />
              <div className="text-center">
                <Link to={`/detail/${item.animeId}`}>{item.animeTitle}</Link>
                <p>{item.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
