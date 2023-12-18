import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-9 bg-transparent text-white">
      <h1 className="text-sm md:text-xl font-semibold py-3">{title}</h1>
      <div className="flex overflow-x-scroll cursor-pointer">
        <div className="flex gap-x-3">
        {
          movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path}/>
          ))
        }
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
