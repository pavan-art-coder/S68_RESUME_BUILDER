import axios from "axios";

// Action types (can be imported from a separate file if you want to organize better)
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginuser = (data) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/auth/login", data);
    
    if (response.status === 200) {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.user }); // Assuming API returns `user`
    }
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.data?.message || "There was an error logging in.",
    });
  }
};
