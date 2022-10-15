import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Popular from "./Popular";
import Search from "./AnimeSearch";
import GenresList from "./GenresList";

const Home = ({ search, div }) => {
  const [anime, setAnime] = useState([]);

  const getAnime = async () => {
    const res = await axios.get("https://gogoanime.herokuapp.com/top-airing");
    console.log(res.data);
    setAnime(res.data);
  };

  useEffect(() => {
    getAnime();
  }, []);
  return (
    <section>
      <div className="max-w-[1240px] mx-auto px-4 md:flex items-start justify-between">
        <GenresList />
        <div className="md:w-[80%] px-4">
          <h2 className="text-2xl font-semibold">Explore</h2>
          <p className="text-gray-500">What are you gonna watch today ?</p>

          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            swipeable={false}
            verticalSwipe="standart"
            infiniteLoop={true}
            showStatus={false}
          >
            {anime.map((item) => (
              <div className="relative mt-5">
                <img
                  src={item.animeImg}
                  alt=""
                  className="object-center object-cover rounded-lg bg-black opacity-50 h-[450px]"
                />
                <div className="absolute top-[50%] left-[5%] translate-y-[-50%] md:w-[50%] text-left flex flex-col gap-3">
                  <p className="md:text-6xl text-4xl font-semibold">
                    {item.animeTitle}
                  </p>
                  <p>{item.latestEp}</p>
                  <div className="flex gap-3">
                    <p>{item.genres[0]}</p>
                    <p>{item.genres[1]}</p>
                    <p>{item.genres[2]}</p>
                    <p>{item.genres[3]}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <Search search={search} div={div} />
          <Popular />
        </div>
      </div>
    </section>
  );
};

export default Home;
