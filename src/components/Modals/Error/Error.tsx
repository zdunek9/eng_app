import { Wrapper } from "./Error.style";
import { MdAccessible } from "react-icons/md";
const Error = () => {
  return (
    <Wrapper>
      <span>
        <MdAccessible />
      </span>
      <h1>
        We had a probem with downloading data from the server. Try again later
      </h1>
      <span>
        <MdAccessible />
      </span>
    </Wrapper>
  );
};

export default Error;
