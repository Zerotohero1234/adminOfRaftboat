import {
  RAFTBOAT_CREATE_FAIL,
  RAFTBOAT_CREATE_REQUEST,
  RAFTBOAT_CREATE_RESET,
  RAFTBOAT_CREATE_SUCCESS,
  RAFTBOAT_DELETE_FAIL,
  RAFTBOAT_DELETE_REQUEST,
  RAFTBOAT_DELETE_SUCCESS,
  RAFTBOAT_EDIT_FAIL,
  RAFTBOAT_EDIT_REQUEST,
  RAFTBOAT_EDIT_SUCCESS,
  RAFTBOAT_LIST_FAIL,
  RAFTBOAT_LIST_REQUEST,
  RAFTBOAT_LIST_RESET,
  RAFTBOAT_LIST_SUCCESS,
  RAFTBOAT_UPDATE_FAIL,
  RAFTBOAT_UPDATE_REQUEST,
  RAFTBOAT_UPDATE_RESET,
  RAFTBOAT_UPDATE_SUCCESS,
} from "../Constants/RaftboatContants";

// ALL RAFT
export const raftboatListReducer = (state = { raftboats: [] }, action) => {
  switch (action.type) {
    case RAFTBOAT_LIST_REQUEST:
      return { loading: true };
    case RAFTBOAT_LIST_SUCCESS:
      return { loading: false, raftboats: action.payload };
    case RAFTBOAT_LIST_FAIL:
      return { loading: false, error: action.payload };
    case RAFTBOAT_LIST_RESET:
      return { raftboats: [] };
    default:
      return state;
  }
};

// DELETE RAFTBOAT
export const raftboatDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case RAFTBOAT_DELETE_REQUEST:
      return { loading: true };
    case RAFTBOAT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case RAFTBOAT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// CREATE RAFTBOAT
export const raftboatCreateReducer = (state = { }, action) => {
  switch (action.type) {
    case RAFTBOAT_CREATE_REQUEST:
      return { loading: true };
    case RAFTBOAT_CREATE_SUCCESS:
      return { loading: false, success: true, raftboat: action.payload };
    case RAFTBOAT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case RAFTBOAT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};


// EDIT RAFTBOAT
export const raftboatEditReducer = (
  state = { raftboat: { } },
  action
) => {
  switch (action.type) {
    case RAFTBOAT_EDIT_REQUEST:
      return { ...state, loading: true };
    case RAFTBOAT_EDIT_SUCCESS:
      return { loading: false, raftboat: action.payload };
    case RAFTBOAT_EDIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// UPDATE RAFTBOAT
export const raftboatUpdateReducer = (state = { raftboat:{} }, action) => {
  switch (action.type) {
    case RAFTBOAT_UPDATE_REQUEST:
      return { loading: true };
    case RAFTBOAT_UPDATE_SUCCESS:
      return { loading: false, success: true, raftboat: action.payload };
    case RAFTBOAT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case RAFTBOAT_UPDATE_RESET:
      return { raftboat: {} };
    default:
      return state;
  }
};