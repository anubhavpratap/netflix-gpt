import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView, unsetGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
import SearchBar from './SearchBar';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        if (location.pathname === '/') navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, location.pathname]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
    navigate("/browse");
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleBackClick = () => {
    navigate(-1); // Goes back to previous page
  };

  return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
        {/* ✅ Back Button */}
        {location.pathname !== '/browse' && (
          <button
            onClick={handleBackClick}
            className="text-white font-semibold mr-4 bg-gray-700 px-3 py-1 rounded-md hover:bg-gray-600"
          >
            ⬅ Back
          </button>
        )}

        <div onClick={() => {navigate('/browse'); dispatch(unsetGptSearch())}} className="cursor-pointer">
          <img className="w-36 md:w-44" src={LOGO_URL} alt="logo" />
        </div>

      </div>

      {user && (
        <div className="flex p-2 justify-between items-center">
          <SearchBar />
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-2 bg-green-600 text-white rounded-lg"
            onClick={() => navigate('/watchlist')}
          >
            🎬 Watchlist
          </button>
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch
              ? 'Homepage'
              : 'GPT Search'}
          </button>
          <img
            className="hidden md:block w-12 h-12 rounded-full"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ml-4">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
