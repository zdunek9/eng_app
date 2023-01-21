import { useDispatch, useSelector } from "react-redux";
import { Wrapper, TabLoggLast } from "./Navigation.styles";
import { RootState } from "../../Store/store";
import { authActions } from "../../Store/authSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "../AuthItems/BurgerMenu/BurgerMenu";
import { useState } from "react";
import Burger from "../AuthItems/BurgerMenu/Burger";
import logo from "./../styles/Images/CoolNameLogo.png";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLogged);
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);

  let navigate = useNavigate();

  const onchangeLogModalHandler = () => {
    navigate(`/login`);
  };
  const onLogOutHandler = () => {
    dispatch(authActions.logout());
    navigate("/index");
  };
  let activeClass = "activeClass";

  return (
    <>
      <Wrapper isLoggedIn={isLoggedIn}>
        <NavLink to="home">
          <img src={logo} alt="page_logo" />
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="flashcards"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            <p>Flashcards</p>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink
            to="random"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            Random Questinon
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink
            to="favorites"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            Favorite Question
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink
            to="Account"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            Account
          </NavLink>
        )}
        {!isLoggedIn && (
          <TabLoggLast onClick={onchangeLogModalHandler}>Login</TabLoggLast>
        )}
        {isLoggedIn && (
          <TabLoggLast onClick={onLogOutHandler}>Logout</TabLoggLast>
        )}
      </Wrapper>
      {isLoggedIn && (
        <Burger open={openBurgerMenu} setOpen={setOpenBurgerMenu} />
      )}
      {isLoggedIn && (
        <BurgerMenu open={openBurgerMenu} setOpen={setOpenBurgerMenu} />
      )}
    </>
  );
};
export default Navigation;
