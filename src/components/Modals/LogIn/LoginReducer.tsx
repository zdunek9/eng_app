export const reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.payload };
    case "setPwd":
      return { ...state, pwd: action.payload };
    case "setErrMsg":
      return { ...state, errMsg: action.payload };
    case "setResetEmail":
      return { ...state, resetEmail: action.payload };
    case "setShowResetPwd":
      return { ...state, showResetPwd: action.payload };
    case "setSendStatus":
      return { ...state, sendStatus: action.payload };
    case "setLoadingState":
      return { ...state, loadingState: action.payload };
  }
};
