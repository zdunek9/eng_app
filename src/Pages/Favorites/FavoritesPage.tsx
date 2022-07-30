import Hearth from "../../components/styles/Hearth/Hearth";
import { ItemWrapper, Wrapper } from "./Favorites.style";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { counterActions } from "../../Redux/counterSlice";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoritesArray = useSelector(
    (state: RootState) => state.counter.questions
  );
  const newFavoritesArray = favoritesArray.filter(
    (item) => item.isFavorites === true
  );
  const favoritesHandler = (id: string) => {
    dispatch(counterActions.favoritesHandler(id));
  };
  return (
    <Wrapper
      as={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      {newFavoritesArray.length === 0 ? (
        <p>It looks like you don't have any favorite questions.<br />Add new!</p>
      ) : (
        <ItemWrapper>
          {newFavoritesArray.map((item: any) => (
            <div key={item.id}>
              <Hearth
                favoritesHandler={favoritesHandler.bind(this, item.id)}
                isChecked={item.isFavorites}
              />
              <p>{item.question}</p>
            </div>
          ))}
        </ItemWrapper>
      )}
    </Wrapper>
  );
};
export default FavoritesPage;
