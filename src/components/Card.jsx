import Link from "next/link";
import React from "react";

function Card({ movie }) {
  return (
    <div className="max-w-md rounded-lg shadow-lg hover:shadow">
      <Link href={`/movie/${movie.id}`}>
        <img
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/original${
            movie?.poster_path || movie?.backdrop_path
          }`}
          alt=""
        />
      </Link>
    </div>
  );
}

export default Card;
