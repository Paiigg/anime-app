import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Genres from "./components/Genres";
import { useState, useEffect } from "react";
import axios from "axios";
import AnimeDetail from "./components/AnimeDetail";

function App() {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  const [div, setDiv] = useState(false);

  const searchAnime = (event) => {
    if (event.key === "Enter") {
      axios
        .get(`https://gogoanime.herokuapp.com/search?keyw=${query}`)
        .then((response) => {
          console.log(response.data);
          setSearch(response.data);
        });
      setQuery("");
      setDiv(!div);
    }
  };
  return (
    <div className="App">
      <Navbar searchAnime={searchAnime} query={query} setQuery={setQuery} />
      <Routes>
        <Route path="/" exact element={<Home search={search} div={div} />} />
        <Route
          path="/anime/:genres"
          element={<Genres search={search} div={div} />}
        />
        <Route path="/detail/:animeId" element={<AnimeDetail />} />
      </Routes>
    </div>
  );
}

export default App;
