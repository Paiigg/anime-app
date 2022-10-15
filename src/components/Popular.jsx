import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";

const Popular = () => {
  const [anime, setAnime] = useState([]);

  const getAnime = async () => {
    const res = await axios.get("https://gogoanime.herokuapp.com/popular");
    console.log(res.data);
    setAnime(res.data);
  };

  useEffect(() => {
    getAnime();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <div className="py-12">
        <h2 className="text-2xl font-semibold mb-5">Popular Anime</h2>
        <Slider {...settings}>
          {anime.map((item, idx) => (
            <div className="relative overflow-x-hidden" key={idx}>
              <img src={item.animeImg} alt="" />
              <div className="absolute bottom-0 opacity-0 top-[50%] hover:opacity-100 bg-black/10 backdrop-blur-sm text-center right-0 left-0">
                <Link to={`/detail/${item.animeId}`}>{item.animeTitle}</Link>
                <p>Release: {item.releasedDate}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Popular;
