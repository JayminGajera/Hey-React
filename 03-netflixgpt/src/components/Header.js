import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
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
    <div className="absolute w-[100%] z-10 flex justify-between items-center bg-gradient-to-b from-black">
      <img
        className="w-56 px-8 py-2 "
        src={NETFLIX_LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex gap-x-1 items-center mr-7 ">
          <img src={user?.photoURL} className="w-9 h-9 mt-2 rounded-full object-cover" />

          <button
            onClick={handleSignOut}
            className=" mt-2 p-2 border border-white bg-black text-white font-semibold text-xs bg-opacity-70 rounded-full"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
