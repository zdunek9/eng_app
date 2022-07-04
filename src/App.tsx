import { useState } from "react";
import Layout from "./components/Layout/Layout";
import SignUpModal from "./components/Modals/SignUpModal";
import { GlobalStyle } from "./components/styles/globalStyles";
import HomePageNotAuth from "./Pages/HomePageNotAuth/HomePageNotAuth";
import HomePageAuth from "./Pages/HomePageAuth/HomePageAuth";
import RandomQuestion from "./Pages/RandomQuestion/RandomQuestion";
import FavoritesPage from "./Pages/Favorites/FavoritesPage";

function App() {
  const [showLogModal, setShowLogModal] = useState<boolean>(false)
  const changeLogModalHandler = () =>{
    setShowLogModal(prevState=>!prevState)
  }
  return (
    <Layout changeLogModalHandler={changeLogModalHandler}>
    <GlobalStyle />
    {showLogModal && <SignUpModal changeLogModalHandler={changeLogModalHandler} />}
    {/* <HomePageNotAuth changeLogModalHandler={changeLogModalHandler} /> */}
    {/* <HomePageAuth /> */}
    {/* <RandomQuestion /> */}
    <FavoritesPage />
    </Layout>
  );
}

export default App;
