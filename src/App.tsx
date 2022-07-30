import SignUpModal from "./components/Modals/SignUpModal";
import { GlobalStyle } from "./components/styles/globalStyles";
import HomePageNotAuth from "./Pages/HomePageNotAuth/HomePageNotAuth";
import HomePageAuth from "./Pages/HomePageAuth/HomePageAuth";
import RandomQuestion from "./Pages/RandomQuestion/RandomQuestion";
import FavoritesPage from "./Pages/Favorites/FavoritesPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import Flashcards from "./Pages/Flashcards/Flashcards";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Layout/Navigation";
import { MainWrapper } from "./App.styles";

function App() {
  const isLogedIn = useSelector((state: RootState) => state.auth.isLogged);
  const location = useLocation();
  return (
    <MainWrapper>
      <GlobalStyle />
      <Navigation />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePageNotAuth />} />
          <Route path="login" element={<SignUpModal />} />
          {isLogedIn && <Route path="home" element={<HomePageAuth />} />}
          {isLogedIn && (
            <Route path="random" element={<RandomQuestion />} />
          )}
          {isLogedIn && (
            <Route path="favorites" element={<FavoritesPage />} />
          )}
          {isLogedIn && (
            <Route path="flashcards" element={<Flashcards />} />
          )}
          <Route
            path="*"
            element={isLogedIn ? <HomePageAuth /> : <HomePageNotAuth />}
          />
        </Routes>
      </AnimatePresence>
    </MainWrapper>
  );
}

export default App;
