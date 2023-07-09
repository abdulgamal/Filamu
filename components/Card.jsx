import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({ movie }) {
  return (
    <div className="max-w-md rounded-lg shadow-lg hover:shadow cursor-pointer">
      <Link href={`/movie/${movie.id}`}>
        <Image
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/original${
            movie?.poster_path || movie?.backdrop_path
          }`}
          width={500}
          height={500}
          alt={movie?.title}
        />
      </Link>
    </div>
  );
}

export default Card;
