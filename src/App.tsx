import Layout from "./components/Layout/Layout";
import SignUpModal from "./components/Modals/SignUpModal";
import { GlobalStyle } from "./components/styles/globalStyles";
import HomePageNotAuth from "./Pages/HomePageNotAuth/HomePageNotAuth";
import HomePageAuth from "./Pages/HomePageAuth/HomePageAuth";
import RandomQuestion from "./Pages/RandomQuestion/RandomQuestion";
import FavoritesPage from "./Pages/Favorites/FavoritesPage";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store";
import Flashcards from "./Pages/Flashcards/Flashcards";

function App() {
  const isLogedIn = useSelector((state: RootState) => state.counter.isLogged);

  return (
      <Layout>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePageNotAuth />} />
          <Route path="/login" element={<SignUpModal />} />
          {isLogedIn && <Route path="/home" element={<HomePageAuth />} />}
          {isLogedIn && (
            <Route path="/home/random" element={<RandomQuestion />} />
          )}
          {isLogedIn && (
            <Route path="/home/favorites" element={<FavoritesPage />} />
          )}
          {isLogedIn && (
            <Route path="/home/flashcards" element={<Flashcards />} />
          )}
          <Route
            path="*"
            element={isLogedIn ? <HomePageAuth /> : <HomePageNotAuth />}
          />
        </Routes>
      </Layout>
  );
}

export default App;
