import { useDispatch } from "react-redux";
import { StyledMenu } from "./BurgerMenu.style";
import { authActions } from "../../../Redux/authSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BurgerMenu: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const onLogOutHandler = () => {
    dispatch(authActions.logout());
    setOpen(false);
    navigate("/");
  };
  return (
    <StyledMenu open={open}>
      <NavLink to="home" onClick={() => setOpen(false)}>
        Home
      </NavLink>
      <NavLink to="flashcards" onClick={() => setOpen(false)}>
        Flashcards
      </NavLink>

      <NavLink to="random" onClick={() => setOpen(false)}>
        Random Questinon
      </NavLink>

      <NavLink to="favorites" onClick={() => setOpen(false)}>
        Favorite Question
      </NavLink>
      <a onClick={onLogOutHandler}>Logout</a>
    </StyledMenu>
  );
};
export default BurgerMenu;
