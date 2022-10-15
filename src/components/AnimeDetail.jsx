import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Episode from "./Episode";

const AnimeDetail = () => {
  const { animeId } = useParams();
  const [detail, setDetail] = useState([]);
  const url = `https://gogoanime.herokuapp.com/anime-details/${animeId}`;
  const getDetail = async () => {
    const res = await axios.get(url);
    console.log(res.data);
    setDetail(res.data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <section>
      <div className="max-w-[1240px] mx-auto px-4 h-screen">
        <h2 className="text-2xl font-semibold">{detail.animeTitle}</h2>
        <div className="grid md:grid-cols-2">
          <div className="mt-5 flex md:flex-row flex-col gap-5 items-center">
            <img
              src={detail.animeImg}
              className="rounded-lg h-[375px] w-[270px]"
              alt=""
            />
            <div className="flex flex-col gap-5">
              <p className="font-semibold">Type :</p>
              <p className="text-gray-500">{detail.type}</p>
              <p className="font-semibold">Status :</p>
              <p className="text-gray-500">{detail.status}</p>
              <p className="font-semibold">Release :</p>
              <p className="text-gray-500">{detail.releasedDate}</p>
              <p className="font-semibold">Genres :</p>
              <p className="flex gap-2 w-[50px] flex-wrap">
                {detail.genres?.map((item) => (
                  <p className="text-gray-500 ">{item}</p>
                ))}
              </p>
            </div>
          </div>
          <Episode data={detail.episodesList} />
        </div>
        <div className="mt-5">
          <p className="font-semibold">Synopsis :</p>
          <p className="text-gray-500">{detail.synopsis}</p>
        </div>
      </div>
    </section>
  );
};

export default AnimeDetail;
