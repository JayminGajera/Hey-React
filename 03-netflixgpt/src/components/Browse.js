import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryConrainer from "./SecondaryConrainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatingMovies from "../hooks/useTopRatingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryConrainer/>
    </div>
  )
}

export default Browse
