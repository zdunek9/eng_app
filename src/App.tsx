import { useState } from "react";
import Layout from "./components/Layout/Layout";
import SignUpModal from "./components/Modals/SignUpModal";
import { GlobalStyle } from "./components/styles/globalStyles";
import HomePageNotAuth from "./Pages/HomePageNotAuth/HomePageNotAuth";
import HomePageAuth from "./Pages/HomePageAuth/HomePageAuth";
import RandomQuestion from "./Pages/RandomQuestion/RandomQuestion";
import FavoritesPage from "./Pages/Favorites/FavoritesPage";
import { Route, Routes } from "react-router-dom"

function App() {
  const [showLogModal, setShowLogModal] = useState<boolean>(false)
  const changeLogModalHandler = () =>{
    setShowLogModal(prevState=>!prevState)
  }
  return (
    <Routes>
      <Layout changeLogModalHandler={changeLogModalHandler}>
        <GlobalStyle />
          {showLogModal && <SignUpModal changeLogModalHandler={changeLogModalHandler} />}
          <Route path='/welcome' element={<HomePageNotAuth changeLogModalHandler={changeLogModalHandler} />} />
          <Route path='/home' element={<HomePageAuth />} />
          <Route path='/home/random' element={<RandomQuestion />} />
          <Route path='/home/favorites' element={<FavoritesPage />} />
      </Layout>
    </Routes>
  );
}

export default App;
