export interface FlashcardModel {
  id: string;
  flashcardPol: string;
  flashcardAng: string;
  flashcardTipPol: string;
  flashcardTipAng: string;
}

export interface QuestionModel {
  id: string;
  question: string;
  questionPol: string;
  isFavorites: boolean;
}

export interface InputProps {
  validNameProp: boolean;
  setUserEmailProp: React.Dispatch<React.SetStateAction<string>>;
  userEmailProp: string;
  errMsg: string;
}

export interface InputPasswordProps {
  passwordProp: string;
  setPasswordProp: React.Dispatch<React.SetStateAction<string>>;
  secondPasswordProp: string;
  setSecondPasswordProp: React.Dispatch<React.SetStateAction<string>>;
  validPasswordProp: boolean;
  passwordMatchProp:boolean
}

export interface DataType {
  data: {
    email: string;
    emailVerified: boolean;
  };
  emailNumber?: number;
}