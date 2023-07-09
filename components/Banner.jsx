import Link from "next/link";
import React from "react";

function Banner({ movie }) {
  const url = `https://image.tmdb.org/t/p/original${
    movie?.backdrop_path || movie?.poster_path
  }`;
  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="bg-black/40">
        <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 h-screen lg:px-8">
          <div className="flex items-center justify-between py-8">
            <h2 className="font-bold text-3xl md:text-5xl tracking-widest">
              Filamu
            </h2>
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center rounded-xl bg-gray-200 px-4 py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent outline-none text-black"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <button className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700">
                Login
              </button>
            </div>
          </div>
          <div className="max-w-xl text-center py-32 sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              {movie?.title}
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              {movie?.overview}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                href={`/movie/${movie?.id}`}
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Watch Trailer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
