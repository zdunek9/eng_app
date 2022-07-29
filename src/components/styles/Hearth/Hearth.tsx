import { HearthIcon } from "./Hearth.style";
interface Props {
  favoritesHandler: () => void;
  isChecked: boolean;
}
const Hearth: React.FC<Props> = ({ favoritesHandler, isChecked }) => {

  return (
    <HearthIcon>
      <label className="like">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={favoritesHandler}
        />
        <div className="hearth" />
      </label>
    </HearthIcon>
  );
};
export default Hearth;
