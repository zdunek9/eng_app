export const reducer = (state: any, action: { type: any; payload: any }) => {
  switch (action.type) {
    case "setUserData":
        return {...state, userData:action.payload}
    case "setNewEmail":
      return { ...state, newEmail: action.payload };
    case "setSendEmail":
      return { ...state, sendEmail: action.payload };
    case "setSendSuccess":
      return { ...state, sendSuccess: action.payload };
    case "setLoading":
      return { ...state, loading: action.payload };
    case "setFormSaveLoading":
      return { ...state, saveFormLoading: action.payload };
    case "setSaveSuccess":
      return { ...state, saveSuccess: action.payload };
    case "setOpenConfirmModal":
      return { ...state, openConfirmModal: action.payload };
    case "setErrorData":
      return { ...state, errorData: action.payload };
  }
};
 