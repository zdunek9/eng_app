import SignUpModal from "./components/Modals/SignUpModal";
import { GlobalStyle } from "./components/styles/globalStyles";
import HomePageNotAuth from "./Pages/HomePageNotAuth/HomePageNotAuth";
import HomePageAuth from "./Pages/HomePageAuth/HomePageAuth";
import RandomQuestion from "./Pages/RandomQuestion/RandomQuestion";
import FavoritesPage from "./Pages/Favorites/FavoritesPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./Store/store";
import Flashcards from "./Pages/Flashcards/Flashcards";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Layout/Navigation";
import Account from "./Pages/Account/Account";
import { useEffect } from "react";
import { authActions } from "./Store/authSlice";

function calculateRemainingTime(expirationTime: any) {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
}

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const remainingTime = calculateRemainingTime(storedExpirationDate);
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return { token: storedToken, duration: remainingTime };
};

function App() {
  const isLogedIn = useSelector((state: RootState) => state.auth.isLogged);
  const dispatch = useDispatch();
  const location = useLocation();
  let logoutTimer: any;

  const tokenData = retrieveStoredToken();

  useEffect(() => {
    if (tokenData) {
      dispatch(authActions.checkForToken(tokenData.token));
    }
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
    logoutTimer = setTimeout(
      () => dispatch(authActions.logout()),
      tokenData?.duration
    );
  }, []);

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(
        () => dispatch(authActions.logout()),
        tokenData.duration
      );
    }
  }, [tokenData]);

  return (
    <>
      <GlobalStyle />
      <Navigation />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/index" element={<HomePageNotAuth />} />
          <Route path="/login" element={<SignUpModal />} />
          {isLogedIn && <Route path="/home" element={<HomePageAuth />} />}
          {isLogedIn && <Route path="/random" element={<RandomQuestion />} />}
          {isLogedIn && <Route path="/favorites" element={<FavoritesPage />} />}
          {isLogedIn && <Route path="/flashcards" element={<Flashcards />} />}
          {isLogedIn && <Route path="/account" element={<Account />} />}
          <Route
            path="*"
            element={isLogedIn ? <HomePageAuth /> : <HomePageNotAuth />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
