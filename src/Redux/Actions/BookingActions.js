import axios from "axios";
import {
    BOOKING_DELETE_FAIL,
    BOOKING_DELETE_REQUEST,
  BOOKING_DELETE_SUCCESS,
  BOOKING_ISPAID_FAIL,
  BOOKING_ISPAID_REQUEST,
  BOOKING_ISPAID_SUCCESS,
  BOOKING_DETAILS_FAIL,
  BOOKING_DETAILS_REQUEST,
  BOOKING_DETAILS_SUCCESS,
  BOOKING_LIST_FAIL,
  BOOKING_LIST_REQUEST,
  BOOKING_LIST_SUCCESS,
  BOOKING_NOTPAID_FAIL,
  BOOKING_NOTPAID_REQUEST,
  BOOKING_NOTPAID_SUCCESS,
  BOOKING_ISCONFIRMED_REQUEST,
  BOOKING_ISCONFIRMED_SUCCESS,
  BOOKING_ISCONFIRMED_FAIL,
  BOOKING_ISCHECKOUT_REQUEST,
  BOOKING_ISCHECKOUT_SUCCESS,
  BOOKING_ISCHECKOUT_FAIL,
} from "../Constants/BookingContants";
import { logout } from "./userActions";

export const listBookings = () => async (dispatch, getState) => {
  try {
    dispatch({ type: BOOKING_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/booking/all`, config);

    dispatch({ type: BOOKING_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BOOKING_LIST_FAIL,
      payload: message,
    });
  }
};

// DELETE BOOKING
export const deleteBooking = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: BOOKING_DELETE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      await axios.delete(`/api/booking/${id}`, config);
  
      dispatch({ type: BOOKING_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: BOOKING_DELETE_FAIL,
        payload: message,
      });
    }
  };

// BOOKINGS DETAILS
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: BOOKING_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/booking/${id}`, config);
    dispatch({ type: BOOKING_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BOOKING_DETAILS_FAIL,
      payload: message,
    });
  }
};

// BOOKING ISPAID
export const isPaidBooking = (booking) => async (dispatch, getState) => {
  try {
    dispatch({ type: BOOKING_ISPAID_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/booking/${booking._id}/isPaid`,{}, config);
    dispatch({ type: BOOKING_ISPAID_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BOOKING_ISPAID_FAIL,
      payload: message,
    });
  }
};

// BOOKING NOTPAID
export const notpaidBooking = (booking) => async (dispatch, getState) => {
  try {
    dispatch({ type: BOOKING_NOTPAID_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/booking/${booking._id}/notPaid`,{}, config);
    dispatch({ type: BOOKING_NOTPAID_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BOOKING_NOTPAID_FAIL,
      payload: message,
    });
  }
};

// BOOKING IS CONFIRMED CHECK_IN
export const isConfirmedCheckIn = (booking) => async (dispatch, getState) => {
  try {
    dispatch({ type: BOOKING_ISCONFIRMED_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/booking/${booking._id}/isConfirmed`,{}, config);
    dispatch({ type: BOOKING_ISCONFIRMED_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BOOKING_ISCONFIRMED_FAIL,
      payload: message,
    });
  }
};

// BOOKING IS CONFIRMED CHECKOUT
export const isConfirmedCheckOut = (booking) => async (dispatch, getState) => {
  try {
    dispatch({ type: BOOKING_ISCHECKOUT_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/booking/${booking._id}/isCheckOut`,{}, config);
    dispatch({ type: BOOKING_ISCHECKOUT_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: BOOKING_ISCHECKOUT_FAIL,
      payload: message,
    });
  }
};