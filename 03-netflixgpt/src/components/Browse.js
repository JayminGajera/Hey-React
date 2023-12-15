import Header from "./Header"
import useNowPlayingMovies from "../hooks/usePopularMovies"
import MainContainer from "./MainContainer";
import SecondaryConrainer from "./SecondaryConrainer";


const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryConrainer/>
    </div>
  )
}

export default Browse
