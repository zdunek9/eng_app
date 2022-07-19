import { useDispatch, useSelector } from "react-redux";
import { Wrapper, TabLoggLast } from "./Navigation.styles";
import { RootState } from "../../Redux/store";
import { counterActions } from "../../Redux/counterSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BurgerMenu from "../AuthItems/BurgerMenu/BurgerMenu";
import { useState } from "react";
import Burger from "../AuthItems/BurgerMenu/Burger";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.counter.isLogged);
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);
  let navigate = useNavigate();

  const onchangeLogModalHandler = () => {
    navigate(`/login`);
  };
  const onLogOutHandler = () => {
    dispatch(counterActions.logout());
    navigate("/");
  };
  let activeClass = "activeClass";

  return (
    <>
      <Wrapper isLoggedIn={isLoggedIn}>
        <NavLink to="home">
          <p>Cool Name</p>
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="home/flashcards"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            Flashcards
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink
            to="/home/random"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            Random Questinon
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink
            to="/home/favorites"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            Favorite Question
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
