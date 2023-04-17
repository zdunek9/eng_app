import { useDispatch } from "react-redux";
import { StyledMenu } from "./BurgerMenu.style";
import { authActions } from "../../../Store/authSlice";
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
    navigate("/index");
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
      <NavLink to="account" onClick={() => setOpen(false)}>
        Account
      </NavLink>
      <span onClick={onLogOutHandler}>Logout</span>
    </StyledMenu>
  );
};
export default BurgerMenu;
