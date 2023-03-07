import request from "@/utils/request";
import React, { useEffect, useState } from "react";
import Card from "./Card";

function Container() {
  const [active, setActive] = useState("fetchTrending");
  const [movies, setMovies] = useState([]);
  const fetchData = async () => {
    const res = await fetch(`${request[active]?.url}`);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [active]);

  return (
    <div className="px-4 md:px-6">
      <div className="flex overflow-x-scroll space-x-5 mb-4 justify-center scrollbar-hide">
        {Object.entries(request).map(([key, { title }]) => (
          <h2
            key={key}
            onClick={() => setActive(key)}
            className={`md:text-2xl cursor-pointer mb-5 ${
              active === key ? "text-rose-400" : "text-gray-400"
            } hover:scale-105 hover:text-rose-400`}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 my-5 w-[90%] mx-auto">
        {movies.map((movie) => (
          <Card movie={movie} key={movie?.id} />
        ))}
      </div>
    </div>
  );
}

export default Container;
