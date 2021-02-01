import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "signin":
      return {
        errorMessage: "",
        token: action.payload.token,
        loading: action.payload.loading,
      };

    case "clear_error_message":
      return { ...state, errorMessage: "" };

    case "signout":
      return { token: null, errorMessage: "" };

    case "toggle_loading":
      return { ...state, loading: action.payload.loading };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    setTimeout(() => {
      dispatch({ type: "toggle_loading", payload: { loading: true } });
    });
    setTimeout(() => {
      dispatch({ type: "signin", payload: { token, loading: false } });
    }, 2000);
  }
};
const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      console.log(response.data.token);
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };
};

const signout = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
  };
};

export const { Context, Provider } = createDataContext(
  AuthReducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignIn },
  { token: null, errorMessage: "", loading: false }
);
