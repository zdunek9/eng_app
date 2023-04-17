import { Wrapper } from "./Error.style";
import { MdAccessible } from "react-icons/md";
const Error = (msg:any) => {
  return (
    <Wrapper>
      <span>
        <MdAccessible />
      </span>
      <h1>
        {msg}
      </h1>
      <span>
        <MdAccessible />
      </span>
    </Wrapper>
  );
};

export default Error;
