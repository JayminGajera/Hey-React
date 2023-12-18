import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggelGptSearhView } from "../utils/gptSlice";
import langKey from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();

  const lang = useSelector((store) => store.config.lang);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleGptSearchClick = () => {
    dispatch(toggelGptSearhView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when componenet will unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 w-[100%] z-20 flex flex-col sm:flex-row md:flex-row justify-center sm:justify-between md:justify-between items-center sm:bg-transparent md:bg-transparent bg-gradient-to-b from-black bg-black">
      <img className="w-56 px-8 py-2 " src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="flex md:gap-x-2 items-center mr-7 ">
          {
            showGptSearch && <div className="mt-2 mr-2">
            <select
              onChange={handleLanguageChange}
              className="rounded-md p-1 bg-black text-white border focus:bg-red-950 border-white"
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option
                  className="bg-black text-white"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          }
          <button
            onClick={handleGptSearchClick}
            className="bg-red-700 text-md text-white px-3 py-1 mt-2 mr-4 rounded-md"
          >
            {showGptSearch ? "Home" : langKey[lang].gptSearch}
          </button>

          <img
            src={user?.photoURL}
            className="w-9 h-9 mt-2 hidden md:inline-block rounded-full object-cover"
          />

          <button
            onClick={handleSignOut}
            className=" mt-2 p-2 border border-white bg-black text-white font-semibold text-xs bg-opacity-70 rounded-full"
          >
            {langKey[lang].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
