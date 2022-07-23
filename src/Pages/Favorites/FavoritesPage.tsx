import Hearth from "../../components/styles/Hearth/Hearth";
import { ItemWrapper, Wrapper } from "./Favorites.style";
import { motion } from "framer-motion";

const FavoritesPage = () => {
  return (
    <Wrapper
      as={motion.div}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <ItemWrapper>
        <div>
          {" "}
          <Hearth />
          <p>Favorites 1</p>
        </div>
        <div>
          {" "}
          <Hearth />
          <p>Favorites 1</p>
        </div>
        <div>
          {" "}
          <Hearth />
          <p>Favorites 1</p>
        </div>
        <div>
          {" "}
          <Hearth />
          <p>Favorites 1</p>
        </div>
        <div>
          {" "}
          <Hearth />
          <p>Favorites 1</p>
        </div>
      </ItemWrapper>
    </Wrapper>
  );
};
export default FavoritesPage;
