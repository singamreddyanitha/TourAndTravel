import { createContext, useEffect, useReducer } from "react";

const initial_state = {
  user: localStorage.getItem("user") !== "undefined"
  ? JSON.parse(localStorage.getItem("user"))
  : null,
  laoding: false,
  error: null,
};

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        laoding: false,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        laoding: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        laoding: false,
        error: action.payload,
      };
    case "REGISTER_SUCCESS":
      return {
        user: null,
        laoding: false,
        error: null,
      };
    case "LOGOUT":
      return {
        user: null,
        laoding: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  const value = {
    user: state.user,
    laoding: state.laoding,
    error: state.error,
    dispatch,
  };


  return (
    <AuthContext.Provider
      // value={{
      //   user: state.user,
      //   laoding: state.laoding,
      //   error: state.error,
      //   dispatch,
      // }}
      value = {value}
    >
      {children}
    </AuthContext.Provider>
  );
};
