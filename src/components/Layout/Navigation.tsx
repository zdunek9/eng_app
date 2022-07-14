import { useDispatch, useSelector } from "react-redux";
import { Wrapper, TabLoggLast } from "./Navigation.styles";
import { RootState } from "../../Redux/store";
import { counterActions } from "../../Redux/counterSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.counter.isLogged);
  let navigate = useNavigate();

  const onchangeLogModalHandler = () => {
    navigate(`/login`);
  };
  const onLogOutHandler = () => {
    dispatch(counterActions.logout());
    navigate("/");
    // sessionStorage.clear();
  };
  let activeClass = "activeClass";

  return (
    <Wrapper>
      <p>Cool Name</p>
      {isLoggedIn && (
        <NavLink
          to="home/fiszki"
          className={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Fiszki
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
  );
};
export default Navigation;
