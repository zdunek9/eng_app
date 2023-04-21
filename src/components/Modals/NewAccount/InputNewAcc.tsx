import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { InputProps } from "../../../models/interface";
import { IconWrapper, InputWrapper } from "./NewAccount.style";

function InputNewAcc({ validNameProp, setUserEmailProp, userEmailProp, errMsg }: InputProps) {
  const [userFocus, setUserFocus] = useState<boolean>(false);
  const userRef: any = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <InputWrapper>
      {validNameProp && errMsg !== "A user with this email exists!" && (
        <IconWrapper>
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "var(--greenColor)" }}
          />
        </IconWrapper>
      )}
      {(!(validNameProp || !userEmailProp) ||
        errMsg === "A user with this email exists!") && (
        <IconWrapper>
          <FontAwesomeIcon
            icon={faTimes}
            style={{ color: "var(--redColor)" }}
          />
        </IconWrapper>
      )}
      <input
        aria-label="Email"
        placeholder="Email"
        className={!(validNameProp || !userEmailProp) ? "errorInput" : ""}
        type="email"
        maxLength={60}
        ref={userRef}
        required
        autoComplete="email"
        onChange={(e) => setUserEmailProp(e.target.value)}
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
      />
      {userFocus && userEmailProp && !validNameProp && (
        <p>Enter a valid email address</p>
      )}
    </InputWrapper>
  );
}

export default InputNewAcc;
