import React, { useState, useEffect } from "react";
import Search from "./AnimeSearch";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Genres = ({ search, div }) => {
  const { genres } = useParams();
  const [genre, setGenre] = useState([]);
  const url = `https://gogoanime.herokuapp.com/genre/${genres}`;
  const getGenres = async () => {
    const res = await axios.get(url);
    console.log(res);
    setGenre(res.data);
  };

  useEffect(() => {
    getGenres();
  }, [url]);

  return (
    <div>
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="py-12">
          <h2 className="text-2xl font-semibold mb-5">Genres {genres}</h2>
          <div className="grid md:grid-cols-6 grid-cols-2 gap-3">
            {genre.map((item, idx) => (
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
      <Search search={search} div={div} />
    </div>
  );
};

export default Genres;
