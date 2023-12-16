import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryConrainer from "./SecondaryConrainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatingMovies from "../hooks/useTopRatingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />

      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryConrainer />
        </>
      )}
    </div>
  );
};

export default Browse;
