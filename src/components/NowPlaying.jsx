import Link from "next/link";
import React from "react";

function NowPlaying({ movie }) {
  const url = `https://image.tmdb.org/t/p/original${
    movie?.poster_path || movie?.backdrop_path
  }`;
  return (
    <section className="text-gray-600">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-10 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium text-gray-600 lg:w-1/3 lg:mb-0 mb-4">
            Now Playing
          </h1>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="relative md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={`https://image.tmdb.org/t/p/original${
                  movie[0]?.poster_path || movie[0]?.backdrop_path
                }`}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-col justify-center items-center">
                <Link href={`/movie/${movie[0].id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 md:w-24 md:h-24 text-white/60 cursor-pointer hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={`https://image.tmdb.org/t/p/original${
                  movie[1]?.poster_path || movie[1]?.backdrop_path
                }`}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-col justify-center items-center">
                <Link href={`/movie/${movie[1].id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 md:w-24 md:h-24 text-white/60 cursor-pointer hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={`https://image.tmdb.org/t/p/original${
                  movie[2]?.poster_path || movie[2]?.backdrop_path
                }`}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-col justify-center items-center">
                <Link href={`/movie/${movie[2].id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 md:w-24 md:h-24 text-white/60 cursor-pointer hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="relative md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={`https://image.tmdb.org/t/p/original${
                  movie[3]?.poster_path || movie[3]?.backdrop_path
                }`}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-col justify-center items-center">
                <Link href={`/movie/${movie[3].id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 md:w-24 md:h-24 text-white/60 cursor-pointer hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={`https://image.tmdb.org/t/p/original${
                  movie[4]?.poster_path || movie[4]?.backdrop_path
                }`}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-col justify-center items-center">
                <Link href={`/movie/${movie[4].id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 md:w-24 md:h-24 text-white/60 cursor-pointer hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={`https://image.tmdb.org/t/p/original${
                  movie[5]?.poster_path || movie[5]?.backdrop_path
                }`}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 z-50 flex flex-col justify-center items-center">
                <Link href={`/movie/${movie[5].id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 md:w-24 md:h-24 text-white/60 cursor-pointer hover:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NowPlaying;
