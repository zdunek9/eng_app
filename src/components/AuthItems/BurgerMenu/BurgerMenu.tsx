import { useDispatch } from "react-redux";
import { StyledMenu } from "./BurgerMenu.style";
import { counterActions } from "../../../Redux/counterSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BurgerMenu: React.FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const onLogOutHandler = () => {
    dispatch(counterActions.logout());
    setOpen(false);
    navigate("/");
  };
  return (
    <StyledMenu open={open}>
      <NavLink to="home/flashcards" onClick={() => setOpen(false)}>
        Flashcards
      </NavLink>

      <NavLink to="/home/random" onClick={() => setOpen(false)}>
        Random Questinon
      </NavLink>

      <NavLink to="/home/favorites" onClick={() => setOpen(false)}>
        Favorite Question
      </NavLink>
      <a onClick={onLogOutHandler}>Logout</a>
    </StyledMenu>
  );
};
export default BurgerMenu;
