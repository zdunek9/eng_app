import Layout from "./components/Layout/Layout";
import SignUpModal from "./components/Modals/SignUpModal";
import { GlobalStyle } from "./components/styles/globalStyles";
import HomePageNotAuth from "./Pages/HomePageNotAuth/HomePageNotAuth";
import HomePageAuth from "./Pages/HomePageAuth/HomePageAuth";
import RandomQuestion from "./Pages/RandomQuestion/RandomQuestion";
import FavoritesPage from "./Pages/Favorites/FavoritesPage";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
      <>
      <Layout>
      <GlobalStyle />
      <Routes>
          <Route path='/login' element={<SignUpModal />} />
          <Route path='welcome' element={<HomePageNotAuth />} />
          <Route path='home' element={<HomePageAuth />} />
          <Route path='home/random' element={<RandomQuestion />} />
          <Route path='home/favorites' element={<FavoritesPage />} />
    </Routes>
  </Layout>
</>
  );
}

export default App;
