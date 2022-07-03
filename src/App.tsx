import { useState } from "react";
import Layout from "./components/Layout/Layout";
import SignUpModal from "./components/Modals/SignUpModal";
import { GlobalStyle } from "./components/styles/globalStyles";
import HomePageNotAuth from "./Pages/HomePageNotAuth";


function App() {
  const [showLogModal, setShowLogModal] = useState<boolean>(false)
  const changeLogModalHandler = () =>{
    setShowLogModal(prevState=>!prevState)
  }
  return (
    <Layout changeLogModalHandler={changeLogModalHandler}>
    <GlobalStyle />
    {showLogModal && <SignUpModal changeLogModalHandler={changeLogModalHandler} />}
    <HomePageNotAuth changeLogModalHandler={changeLogModalHandler} />
    </Layout>
  );
}

export default App;
