import React, { useRef } from "react";
import langKey from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GPTSeachBar = () => {
  const lang = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

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

    console.log("results ", gptResults.choices);
  };

  return (
    <div className="flex justify-center">
      <form
        className="p-6 mt-[10%] bg-black rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="py-2 px-1 w-[20rem] rounded-md mr-2"
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
