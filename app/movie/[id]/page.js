"use client";
import Breadcrumb from "@/components/Breadcrumb";
import CardInfo from "@/components/CardInfo";
import Header from "@/components/Header";
import NotFound from "@/components/NotFound";
import Moment from "react-moment";
import moment from "moment";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { FadeLoader } from "react-spinners";

function Details({ params }) {
  const { id } = params;
  const [isTrailer, setIsTrailer] = useState({});
  const [similar, setSimilar] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const start = moment().add(-movieDetails.runtime, "m");

  useEffect(() => {
    const fetchVideo = async () => {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );
      const { results } = await res.json();
      const trailer =
        results?.length > 0 &&
        results?.filter((movie) => movie.name === "Official Trailer");
      if (trailer.length > 0) {
        setIsTrailer(trailer[0]);
        setLoading(false);
      }
      setLoading(false);
    };
    fetchVideo();
  }, [id]);

  useEffect(() => {
    const fetchSimilarVideo = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
      );
      const { results } = await res.json();
      setSimilar(results);
    };
    fetchSimilarVideo();
  }, [id]);

  useEffect(() => {
    const getCredits = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&append_to_response=credits`
      );
      const data = await res.json();
      setMovieDetails(data);
    };
    getCredits();
  }, [id]);

  return (
    <div className="text-white">
      <Header />
      <div className="w-[90%] mx-auto">
        <Breadcrumb name={movieDetails.title || movieDetails.name} />
        {isTrailer.key ? (
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex-1">
              <YouTube videoId={isTrailer?.key} opts={{ width: "100%" }} />
              <div className="mt-5">
                <p className="text-gray-600 text-xl md:text-2xl font-bold tracking-wider">
                  {movieDetails.title || movieDetails.name}
                </p>
                <div className="flex gap-2">
                  <Moment date={start} format="hh:mm:ss" trim durationFromNow />{" "}
                  <p>
                    {movieDetails?.genres?.map((gen, i) => (
                      <span key={i}>{gen.name} </span>
                    ))}
                  </p>
                </div>
                <p className="my-3 font-normal text-gray-600">
                  {movieDetails?.overview}
                </p>
                <p className="text-gray-600 mb-2 text-xl md:text-2xl font-bold tracking-wider">
                  Casts
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {movieDetails?.credits?.cast.slice(0, 6).map((c, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-3 bg-gray-700 p-2 rounded-md"
                    >
                      <p className="text-gray-400 font-bold">{c.character}</p>
                      <p>{c.name || c.original_name}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 my-2 text-xl md:text-2xl font-bold tracking-wider">
                  Crew
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {movieDetails?.credits?.crew.slice(0, 6).map((c, i) => (
                    <div
                      key={i}
                      className="flex flex-col gap-3 bg-gray-700 p-2 rounded-md"
                    >
                      <p className="text-gray-400 font-bold">{c.job}</p>
                      <p>{c.name || c.original_name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-base">Similar Movies</h2>
              {similar.map((movie) => (
                <CardInfo movie={movie} key={movie?.id} />
              ))}
            </div>
          </div>
        ) : loading ? (
          <div className="flex flex-col justify-center items-center h-[80vh]">
            <FadeLoader color="#36d7b7" />
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default Details;
