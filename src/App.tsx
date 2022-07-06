import Layout from "./components/Layout/Layout";
import SignUpModal from "./components/Modals/SignUpModal";
import { GlobalStyle } from "./components/styles/globalStyles";
import HomePageNotAuth from "./Pages/HomePageNotAuth/HomePageNotAuth";
import HomePageAuth from "./Pages/HomePageAuth/HomePageAuth";
import RandomQuestion from "./Pages/RandomQuestion/RandomQuestion";
import FavoritesPage from "./Pages/Favorites/FavoritesPage";
import { Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store"

function App() {
  const isLogedIn = useSelector((state: RootState) => state.counter.randomQuestion)
  return (
      <>
      <Layout>
        <GlobalStyle />
          <Routes>
              <Route path='/login' element={<SignUpModal />} />
              <Route path='welcome' element={<HomePageNotAuth />} />
              {isLogedIn && <Route path='home' element={<HomePageAuth />} />}
              {isLogedIn && <Route path='home/random' element={<RandomQuestion />} />}
            {isLogedIn && <Route path='home/favorites' element={<FavoritesPage />} />}
            {isLogedIn&&<Route path='*' element={<HomePageNotAuth />} />}
            {!isLogedIn&&<Route path='*' element={<HomePageAuth />} />}
        </Routes>
  </Layout>
</>
  );
}

export default App;
