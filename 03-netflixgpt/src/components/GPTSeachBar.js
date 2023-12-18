import React, { useRef,useState } from "react";
import langKey from "../utils/languageConstant";
import { useSelector,useDispatch } from "react-redux";
import openai from "../utils/openai";
import {addGptMovieResults} from "../utils/gptSlice";
import {API_OPTIONS} from "../utils/constants"

const GPTSeachBar = () => {
  const lang = useSelector((store) => store.config.lang);

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const searchText = useRef(null);

  //search movies after getting response of openai

  const searchMovies = async(movie) => {
    
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json = await data.json();

    return json.results;

  }

  const handleGptSearchClick = async () => {
    //make an api call to openai api and get movie result

    const gptQuery =
      "Act as a movie recommandation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only gives me name of 5 movies, comma seprated like the example result given ahead. Examaple Result: Gadar, Sholay, Don, Pathan, Hero";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices){
      console.log('Suggestion not present');
      setError('No suggestion Found');
    }

    console.log("results :", gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovies(movie));
    //here call function is async so searchMovies fun return array of promise

    const tmdbResults = await Promise.all(promiseArray);
    console.log("tmdb results ",tmdbResults);

    dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}));
  };

  return (
    <div className="flex md:justify-center pt-[30%] md:pt-0 z-50">
      <form
        className="md:p-6 p-2 -mt-[20%] md:mt-[10%] bg-black rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="py-2 px-2 w-[20rem] rounded-md mr-2"
          type="search"
          placeholder={langKey[lang].getSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="py-2 px-4 bg-red-700 text-white rounded-md"
        >
          {langKey[lang].search}
        </button>

      </form>
    </div>
  );
};

export default GPTSeachBar;
