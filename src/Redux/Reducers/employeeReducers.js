import {
  EMPLOYEE_CREATE_FAIL,
  EMPLOYEE_CREATE_REQUEST,
  EMPLOYEE_CREATE_RESET,
  EMPLOYEE_CREATE_SUCCESS,
  EMPLOYEE_DELETE_FAIL,
  EMPLOYEE_DELETE_REQUEST,
  EMPLOYEE_DELETE_SUCCESS,
  EMPLOYEE_EDIT_FAIL,
  EMPLOYEE_EDIT_REQUEST,
  EMPLOYEE_EDIT_SUCCESS,
  EMPLOYEE_LIST_FAIL,
  EMPLOYEE_LIST_REQUEST,
  EMPLOYEE_LIST_RESET,
  EMPLOYEE_LIST_SUCCESS,
  EMPLOYEE_UPDATE_FAIL,
  EMPLOYEE_UPDATE_REQUEST,
  EMPLOYEE_UPDATE_RESET,
  EMPLOYEE_UPDATE_SUCCESS,
} from "../Constants/EmployeeContants";

// ALL EMPLOYEE
export const employeeListReducer = (state = { employees: [] }, action) => {
  switch (action.type) {
    case EMPLOYEE_LIST_REQUEST:
      return { loading: true };
    case EMPLOYEE_LIST_SUCCESS:
      return { loading: false, employees: action.payload };
    case EMPLOYEE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case EMPLOYEE_LIST_RESET:
      return { employees: [] };
    default:
      return state;
  }
};

// USER DETAILS
// export const userDetailsReducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case USER_DETAILS_REQUEST:
//       return { ...state, loading: true };
//     case USER_DETAILS_SUCCESS:
//       return { loading: false, user: action.payload };
//     case USER_DETAILS_FAIL:
//       return { loading: false, error: action.payload };
//     case USER_DETAILS_RESET:
//       return { user: {} };
//     default:
//       return state;
//   }
// };

// DELETE EMPLOYEE
export const employeeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE_DELETE_REQUEST:
      return { loading: true };
    case EMPLOYEE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case EMPLOYEE_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CREATE EMPLOYEE
export const employeeCreateReducer = (state = { }, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE_REQUEST:
      return { loading: true };
    case EMPLOYEE_CREATE_SUCCESS:
      return { loading: false, success: true, employee: action.payload };
    case EMPLOYEE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case EMPLOYEE_CREATE_RESET:
      return {};
    default:
      return state;
  }
};


// EDIT EMPLOYEE
export const employeeEditReducer = (
  state = { employee: { } },
  action
) => {
  switch (action.type) {
    case EMPLOYEE_EDIT_REQUEST:
      return { ...state, loading: true };
    case EMPLOYEE_EDIT_SUCCESS:
      return { loading: false, employee: action.payload };
    case EMPLOYEE_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE EMPLOYEE
export const employeeUpdateReducer = (state = { employee:{} }, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE_REQUEST:
      return { loading: true };
    case EMPLOYEE_UPDATE_SUCCESS:
      return { loading: false, success: true, employee: action.payload };
    case EMPLOYEE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case EMPLOYEE_UPDATE_RESET:
      return { employee: {} };
    default:
      return state;
  }
};