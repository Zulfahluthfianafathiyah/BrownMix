import { pelangganActions } from "../actionTypes";

export const createPelanggan = (pelanggan) => async (dispatch) => {
  dispatch({ type: pelangganActions.CREATE_PELANGGAN_REQUEST });
  try {
    const response = await fetch("http://localhost:3001/api/user/RegistUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pelanggan),
    });

    const data = await response.json();
    console.log(data);
    window.location.href = "/login";
    dispatch({
      type: pelangganActions.CREATE_PELANGGAN_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: pelangganActions.CREATE_PELANGGAN_FAILURE,
      payload: error.message,
    });
  }
};

export const loginPelanggan = (pelanggan) => async (dispatch) => {
  dispatch({ type: pelangganActions.CREATE_PELANGGAN_REQUEST });
  try {
    const response = await fetch("http://localhost:3001/api/user/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pelanggan),
    });
    if (response.status === 500) {
      console.log(response.status);
    } else {
      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);
      window.location.href = "admin";
      dispatch({
        type: pelangganActions.CREATE_PELANGGAN_SUCCESS,
        payload: data,
      });
      return data;
    }
  } catch (error) {
    dispatch({
      type: pelangganActions.CREATE_PELANGGAN_FAILURE,
      payload: error.message,
    });
  }
};
