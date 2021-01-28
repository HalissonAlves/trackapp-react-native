import createDataContext from './createDataContext';

const AuthReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const signup = (dispatch) => {
  return () => {

  }
}

const signin = (dispatch) => {
  return () => {

  }
}

const signout = (dispatch) => {
  return () => {

  }
}

export const { Context, Provider } = createDataContext(
  AuthReducer,
  {signup, signin, signout},
  { isSignedIn: false }
)