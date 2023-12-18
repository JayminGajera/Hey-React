import React from "react";
import GPTSeachBar from "./GPTSeachBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={BG_IMG} alt="bg-img" />
      </div>
      <div className="absolute md:w-full md:h-full">
        <GPTSeachBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
