import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userListReducer, userLoginReducer } from "./Reducers/userReducers";
import {
  employeeCreateReducer,
  employeeDeleteReducer,
  employeeEditReducer,
  employeeListReducer,
  employeeUpdateReducer,
} from "./Reducers/employeeReducers";
import {
  raftboatCreateReducer,
  raftboatDeleteReducer,
  raftboatEditReducer,
  raftboatListReducer,
  raftboatUpdateReducer,
} from "./Reducers/raftboatReducers";
import { categoryCreateReducer, categoryDeleteReducer, categoryEditReducer, categoryListReducer, categoryUpdateReducer } from "./Reducers/CategoryReducers";
import { bookingDeleteReducer, bookingDetailsReducer, bookingIsPaidReducer, bookingListReducer, bookingNotpaidReducer, isCheckOutReducer, isConfirmedReducer } from "./Reducers/BookingReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  employeeList: employeeListReducer,
  employeeDelete: employeeDeleteReducer,
  employeeCreate: employeeCreateReducer,
  employeeEdit: employeeEditReducer,
  employeeUpdate: employeeUpdateReducer,
  raftboatList: raftboatListReducer,
  raftboatDelete: raftboatDeleteReducer,
  raftboatCreate: raftboatCreateReducer,
  raftboatEdit: raftboatEditReducer,
  raftboatUpdate: raftboatUpdateReducer,
  categoryList: categoryListReducer,
  categoryDelete: categoryDeleteReducer,
  categoryCreate: categoryCreateReducer,
  categoryEdit: categoryEditReducer,
  categoryUpdate: categoryUpdateReducer,
  bookingList: bookingListReducer,
  bookingDelete: bookingDeleteReducer,
  bookingDetails: bookingDetailsReducer,
  bookingIsPaid: bookingIsPaidReducer,
  bookingNotpaid: bookingNotpaidReducer,
  isConfirmed: isConfirmedReducer,
  isCheckOut: isCheckOutReducer
});

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
