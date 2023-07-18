import axios from "axios";
import { logout } from "./userActions";
import {
  RAFTBOAT_CREATE_FAIL,
  RAFTBOAT_CREATE_REQUEST,
  RAFTBOAT_CREATE_SUCCESS,
  RAFTBOAT_DELETE_FAIL,
  RAFTBOAT_DELETE_REQUEST,
  RAFTBOAT_DELETE_SUCCESS,
  RAFTBOAT_EDIT_FAIL,
  RAFTBOAT_EDIT_REQUEST,
  RAFTBOAT_EDIT_SUCCESS,
  RAFTBOAT_LIST_FAIL,
  RAFTBOAT_LIST_REQUEST,
  RAFTBOAT_LIST_SUCCESS,
  RAFTBOAT_UPDATE_FAIL,
  RAFTBOAT_UPDATE_REQUEST,
  RAFTBOAT_UPDATE_SUCCESS,
} from "../Constants/RaftboatContants";

// ALL RAFTBOAT
export const listRaftboat = () => async (dispatch, getState) => {
  try {
    dispatch({ type: RAFTBOAT_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/rooms/all/all`, config);

    dispatch({ type: RAFTBOAT_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: RAFTBOAT_LIST_FAIL,
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



// DELETE RAFTBOAT
export const deleteRaftboat = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: RAFTBOAT_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/rooms/${id}`, config);

    dispatch({ type: RAFTBOAT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: RAFTBOAT_DELETE_FAIL,
      payload: message,
    });
  }
};

// CREATE RAFTBOAT
export const createRaftboat = (newRaftboat) => async (dispatch, getState) => {
  try {
    dispatch({ type: RAFTBOAT_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/rooms`, 
      newRaftboat, 
      config
    );

    dispatch({ type: RAFTBOAT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: RAFTBOAT_CREATE_FAIL,
      payload: message,
    });
  }
};

// EDIT RAFTBOAT
export const editRaftboat = (id) => async (dispatch) => {
  try {
    dispatch({ type: RAFTBOAT_EDIT_REQUEST });
    const { data } = await axios.get(`/api/rooms/${id}`);
    dispatch({ type: RAFTBOAT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: RAFTBOAT_EDIT_FAIL,
      payload: message,
    });
  }
};


// UPDATE RAFTBOAT
export const updateRaftboatAction = 
  (raftboat) => 
  async (dispatch, getState) => {
  try {
    dispatch({ type: RAFTBOAT_UPDATE_REQUEST });

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
      `/api/rooms/${raftboat._id}`, 
      raftboat, 
      config
    );

    dispatch({ type: RAFTBOAT_UPDATE_SUCCESS, payload: data });
    dispatch({ type: RAFTBOAT_EDIT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: RAFTBOAT_UPDATE_FAIL,
      payload: message,
    });
  }
};