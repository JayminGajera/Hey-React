import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className="absolute w-screen z-10 flex justify-between">
      <img
        className="w-56 px-8 py-2 bg-gradient-to-b from-black"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div className="flex gap-x-1 items-start mr-12">
          <img
            src={user?.photoURL}
            className="w-7 h-7 mt-2"
          />
        
        <button onClick={handleSignOut} className=" mt-2 p-1 border border-white bg-black text-white">Sign out</button>
      </div>
    </div>
  );
};

export default Header;
