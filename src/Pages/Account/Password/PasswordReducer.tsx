export const reducer = (state: any, action: { type: any; payload: any }) => {
    switch (action.type) {
      case "setPwd":
          return {...state, pwd:action.payload}
      case "setValidPwd":
        return { ...state, validPwd: action.payload };
      case "setPwdFocus":
        return { ...state, pwdFocus: action.payload };
      case "setMatchPwd":
        return { ...state, matchPwd: action.payload };
      case "setValidMatch":
        return { ...state, validMatch: action.payload };
      case "setMatchFocus":
        return { ...state, matchFocus: action.payload };
      case "setErrMsg":
        return { ...state, errMsg: action.payload };
      case "setSaveFormLoading":
        return { ...state, saveFormLoading: action.payload };
      case "setOpenConfirmModal":
        return { ...state, openConfirmModal: action.payload };
    }
  };
   