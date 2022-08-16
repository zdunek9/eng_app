import Hearth from "../../components/styles/Hearth/Hearth";
import { ItemWrapper, NoItemsInformation, Wrapper } from "./Favorites.style";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { counterActions } from "../../Store/counterSlice";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoritesArray = useSelector(
    (state: RootState) => state.counter.favoritesArray
  );
  const favoritesHandler = (id: string) => {
    dispatch(counterActions.favoritesHandler(id));
  };
  return (
    <Wrapper>
      {favoritesArray.length === 0 && (
        <NoItemsInformation
          as={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          It looks like you don't have any favorite questions.
          <br />
          Add new!
        </NoItemsInformation>
      )}
      <AnimatePresence>
        {favoritesArray.length > 0 && (
          <ItemWrapper
            as={motion.div}
            exit={{ x: -1000, transition: { duration: 0.4 } }}
          >
            <AnimatePresence>
              {favoritesArray.map((item: any) => (
                <motion.div
                  exit={{ x: -1000, transition: { duration: 0.4 } }}
                  key={item.id}
                >
                  <Hearth
                    favoritesHandler={favoritesHandler.bind(this, item.id)}
                    isChecked={item.isFavorites}
                  />
                  <p>{item.question}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </ItemWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};
export default FavoritesPage;
