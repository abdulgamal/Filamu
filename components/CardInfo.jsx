import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardInfo({ movie }) {
  return (
    <div>
      <Link
        href={`/movie/${movie.id}`}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={`https://image.tmdb.org/t/p/original${
            movie?.poster_path || movie?.backdrop_path
          }`}
          alt={movie?.title}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {movie?.title || movie?.name}
          </h5>
          <p className="mb-3 font-normal text-gray-400">{movie?.overview}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardInfo;
