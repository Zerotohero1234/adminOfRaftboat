import {
  BOOKING_DELETE_FAIL,
  BOOKING_DELETE_REQUEST,
  BOOKING_DELETE_SUCCESS,
  BOOKING_ISPAID_FAIL,
  BOOKING_ISPAID_REQUEST,
  BOOKING_ISPAID_RESET,
  BOOKING_ISPAID_SUCCESS,
  BOOKING_DETAILS_FAIL,
  BOOKING_DETAILS_REQUEST,
  BOOKING_DETAILS_SUCCESS,
  BOOKING_LIST_FAIL,
  BOOKING_LIST_REQUEST,
  BOOKING_LIST_SUCCESS,
  BOOKING_NOTPAID_FAIL,
  BOOKING_NOTPAID_REQUEST,
  BOOKING_NOTPAID_RESET,
  BOOKING_NOTPAID_SUCCESS,
  BOOKING_ISCONFIRMED_REQUEST,
  BOOKING_ISCONFIRMED_SUCCESS,
  BOOKING_ISCONFIRMED_FAIL,
  BOOKING_ISCONFIRMED_RESET,
  BOOKING_ISCHECKOUT_REQUEST,
  BOOKING_ISCHECKOUT_SUCCESS,
  BOOKING_ISCHECKOUT_FAIL,
  BOOKING_ISCHECKOUT_RESET,
} from "../Constants/BookingContants";

// ALL BOOKING
export const bookingListReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case BOOKING_LIST_REQUEST:
      return { loading: true };
    case BOOKING_LIST_SUCCESS:
      return { loading: false, bookings: action.payload };
    case BOOKING_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// DELETE BOOKING
export const bookingDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_DELETE_REQUEST:
      return { loading: true };
    case BOOKING_DELETE_SUCCESS:
      return { loading: false, success: true };
    case BOOKING_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// BOOKING DETAILS
export const bookingDetailsReducer = (
  state = { loading: true, bookingItems: [] },
  action
) => {
  switch (action.type) {
    case BOOKING_DETAILS_REQUEST:
      return { ...state, loading: true };
    case BOOKING_DETAILS_SUCCESS:
      return { loading: false, booking: action.payload };
    case BOOKING_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// BOOKING ISPAID
export const bookingIsPaidReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_ISPAID_REQUEST:
      return { loading: true };
    case BOOKING_ISPAID_SUCCESS:
      return { loading: false, success: true };
    case BOOKING_ISPAID_FAIL:
      return { loading: false, error: action.payload };
    case BOOKING_ISPAID_RESET:
      return {};
    default:
      return state;
  }
};

// BOOKING NOT PAID
  export const bookingNotpaidReducer = (
    state = {},
    action
  ) => {
    switch (action.type) {
      case BOOKING_NOTPAID_REQUEST:
        return { loading: true };
      case BOOKING_NOTPAID_SUCCESS:
        return { loading: false, success: true };
      case BOOKING_NOTPAID_FAIL:
        return { loading: false, error: action.payload };
      case BOOKING_NOTPAID_RESET:
        return {};
      default:
        return state;
  }
  }


// BOOKING IS CONFIRMED CHECK-IN
export const isConfirmedReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case BOOKING_ISCONFIRMED_REQUEST:
      return { loading: true };
    case BOOKING_ISCONFIRMED_SUCCESS:
      return { loading: false, success: true };
    case BOOKING_ISCONFIRMED_FAIL:
      return { loading: false, error: action.payload };
    case BOOKING_ISCONFIRMED_RESET:
      return {};
    default:
      return state;
}
}

// BOOKING IS CONFIRMED CHECK-OUT
export const isCheckOutReducer = (
  state = {},
  action
) => {
  switch (action.type) {
    case BOOKING_ISCHECKOUT_REQUEST:
      return { loading: true };
    case BOOKING_ISCHECKOUT_SUCCESS:
      return { loading: false, success: true };
    case BOOKING_ISCHECKOUT_FAIL:
      return { loading: false, error: action.payload };
    case BOOKING_ISCHECKOUT_RESET:
      return {};
    default:
      return state;
}
}