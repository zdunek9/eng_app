import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { InputPasswordProps } from "../../../models/interface";
import Hint from "./../../styles/Images/idea.png";
import {
  DesktopVersion,
  HintImage,
  HintWrapper,
  IconWrapper,
  InputPasswordWrapper,
  InputWrapper,
  PhoneVersion,
} from "./NewAccount.style";

function PasswordsNewAcc({
  setPasswordProp,
  passwordProp,
  secondPasswordProp,
  setSecondPasswordProp,
  validPasswordProp,
  passwordMatchProp,
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [confirmPasswordFocus, setConfirmPasswordFocus] =
    useState<boolean>(false);
  const [openHint, setOpenHint] = useState<boolean>(false);

  return (
    <>
      <InputWrapper>
        {validPasswordProp && (
          <IconWrapper>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "var(--greenColor)" }}
            />
          </IconWrapper>
        )}
        {!(validPasswordProp || !passwordProp) && (
          <IconWrapper>
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "var(--redColor)" }}
            />
          </IconWrapper>
        )}
        <InputPasswordWrapper showPassword={showPassword}>
          <input
            aria-label="Password"
            autoComplete="new-password"
            placeholder="Password"
            className={
              !(validPasswordProp || !passwordProp) ? "errorInput" : ""
            }
            type={showPassword ? "text" : "password"}
            maxLength={24}
            onChange={(e) => setPasswordProp(e.target.value)}
            value={passwordProp}
            required
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <DesktopVersion>
            {showPassword && passwordProp && (
              <BiShow
                onMouseUp={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(false)}
              />
            )}
            {!showPassword && passwordProp && (
              <BiHide onMouseDown={() => setShowPassword(true)} />
            )}
          </DesktopVersion>
          <PhoneVersion>
            {passwordProp && (
              <BiShow
                onTouchEnd={() => setShowPassword(false)}
                onTouchStart={() => setShowPassword(true)}
              />
            )}
          </PhoneVersion>
        </InputPasswordWrapper>
        {passwordFocus && !(validPasswordProp || !passwordProp) && (
          <p>Invalid password</p>
        )}
        <HintImage
          src={Hint}
          alt="hint"
          onClick={() => setOpenHint((prev) => !prev)}
        />

        {openHint && (
          <HintWrapper>
            8 to 24 characters. Must include uppercase and lowercase letters, a
            number and a special character. Allowed special characters: ! @ # $
            %
          </HintWrapper>
        )}
      </InputWrapper>
      <InputWrapper>
        {passwordMatchProp && secondPasswordProp && (
          <IconWrapper>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "var(--greenColor)" }}
            />
          </IconWrapper>
        )}
        {!(passwordMatchProp || !secondPasswordProp) && (
          <IconWrapper>
            <FontAwesomeIcon
              icon={faTimes}
              style={{ color: "var(--redColor)" }}
            />
          </IconWrapper>
        )}
        <InputPasswordWrapper showConfirmPassword={showConfirmPassword}>
          <input
            aria-label="Password"
            autoComplete="new-password"
            placeholder="Confirm password"
            className={
              !(passwordMatchProp || !secondPasswordProp) ? "errorInput" : ""
            }
            type={showConfirmPassword ? "text" : "password"}
            maxLength={24}
            onChange={(e) => setSecondPasswordProp(e.target.value)}
            value={secondPasswordProp}
            required
            onFocus={() => setConfirmPasswordFocus(true)}
            onBlur={() => setConfirmPasswordFocus(false)}
          />
          <DesktopVersion>
            {showConfirmPassword && secondPasswordProp && (
              <BiShow
                onMouseUp={() => setShowConfirmPassword(false)}
                onMouseLeave={() => setShowConfirmPassword(false)}
              />
            )}
            {!showConfirmPassword && secondPasswordProp && (
              <BiHide onMouseDown={() => setShowConfirmPassword(true)} />
            )}
          </DesktopVersion>
          <PhoneVersion>
            {secondPasswordProp && (
              <BiShow
                onTouchEnd={() => setShowConfirmPassword(false)}
                onTouchStart={() => setShowConfirmPassword(true)}
              />
            )}
          </PhoneVersion>
        </InputPasswordWrapper>

        {confirmPasswordFocus && !passwordMatchProp && (
          <p>Must match the first password input field.</p>
        )}
      </InputWrapper>
    </>
  );
}

export default PasswordsNewAcc;
