"use client";
import requests from "@/requests";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FadeLoader } from "react-spinners";

function Container() {
  const [active, setActive] = useState("fetchTrending");
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`${requests[active]?.url}`);
      const { results } = await res.json();
      setMovies(results);
      setLoading(false);
    };

    fetchData();
  }, [active]);

  return (
    <div className="px-4 md:px-6 min-h-screen container mx-auto py-8">
      <div className="flex overflow-x-scroll space-x-5 mb-4 md:justify-center no-scrollbar w-full">
        {Object.entries(requests).map(([key, { title }]) => (
          <div
            key={key}
            className={`cursor-pointer mb-5 ${
              active === key ? "bg-rose-600" : "bg-gray-400"
            } hover:scale-105 hover:bg-rose-600 cursor-pointer rounded-lg px-3 py-1 flex items-center justify-center`}
          >
            <h2 onClick={() => setActive(key)} className="text-center text-sm">
              {title}
            </h2>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 my-5 w-[90%] mx-auto">
        {loading && (
          <div className="flex justify-center items-center">
            <FadeLoader color="#36d7b7" loading={loading} />
          </div>
        )}
        {!loading &&
          movies.map((movie) => <Card movie={movie} key={movie?.id} />)}
      </div>
    </div>
  );
}

export default Container;
