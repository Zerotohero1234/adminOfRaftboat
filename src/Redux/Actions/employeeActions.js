import axios from "axios";

import {
  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_DELETE_FAIL,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_EDIT_FAIL,
  EMPLOYEE_EDIT_REQUEST,
  EMPLOYEE_EDIT_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_SUCCESS,
} from "../Constants/EmployeeContants";
import { logout } from "./userActions";

// ALL EMPLOYEE
export const listEmployee = () => async (dispatch, getState) => {
  try {
    dispatch({ type: EMPLOYEE_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/employees/all`, config);

    dispatch({ type: EMPLOYEE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: EMPLOYEE_LIST_FAIL,
      payload: message,
    });
  }
};

// USER DETAILS
// export const getUserDetails = (userId) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: USER_DETAILS_REQUEST });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.get(`/api/users/${userId}`, config);
//     dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     const message =
//       error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message;
//     if (message === "Not authorized, token failed") {
//       dispatch(logout());
//     }
//     dispatch({
//       type: USER_DETAILS_FAIL,
//       payload: message,
//     });
//   }
// };

// DELETE EMPLOYEE
export const deleteEmployee = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: EMPLOYEE_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/employees/${id}`, config);

    dispatch({ type: EMPLOYEE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: EMPLOYEE_DELETE_FAIL,
      payload: message,
    });
  }
};


// CREATE EMPLOYEE
export const createEmployee = (newEmployee) => async (dispatch, getState) => {
  try {
    dispatch({ type: EMPLOYEE_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/employees`, 
      newEmployee, 
      config
    );

    dispatch({ type: EMPLOYEE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: EMPLOYEE_CREATE_FAIL,
      payload: message,
    });
  }
};

// EDIT EMPLOYEE
export const editEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: EMPLOYEE_EDIT_REQUEST });
    const { data } = await axios.get(`/api/employees/${id}`);
    dispatch({ type: EMPLOYEE_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: EMPLOYEE_EDIT_FAIL,
      payload: message,
    });
  }
};


// UPDATE EMPLOYEE
export const updateEmployeeAction = 
  (employee) => 
  async (dispatch, getState) => {
  try {
    dispatch({ type: EMPLOYEE_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/employees/${employee._id}`, 
      employee, 
      config
    );

    dispatch({ type: EMPLOYEE_UPDATE_SUCCESS, payload: data });
    dispatch({ type: EMPLOYEE_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: EMPLOYEE_UPDATE_FAIL,
      payload: message,
    });
  }
};