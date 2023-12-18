import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="md:p-4 md:max-w-[98%] max-w-[22rem] absolute top-[20rem] md:m-4 p-0 -mt-[15%] bg-black text-white rounded-md bg-opacity-90">
     
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
     
    </div>
  );
};

export default GPTMovieSuggestion;
