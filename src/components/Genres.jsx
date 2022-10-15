import React from "react";
import Search from "./AnimeSearch";
import { useParams } from "react-router-dom";

const Genres = ({ search, div }) => {
  const { genres } = useParams();
  return (
    <div>
      <p>Genres {genres}</p>
      <Search search={search} div={div} />
    </div>
  );
};

export default Genres;
