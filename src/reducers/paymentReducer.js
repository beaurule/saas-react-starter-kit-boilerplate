import {PAYMENT_REQUEST} from "../constants";

const initialState = {
  data: null,

  loading: false,
  error: null,
};

export default function auth(state = initialState, action) {
  const REQUEST = PAYMENT_REQUEST;

  switch (action.type) {
    case REQUEST.SUCCESS:
      state = {
        ...state,
        ...action.payload,
        loading: false
      };

      return state;
    case REQUEST.FAILURE:
      state = {
        ...state,
        error: true,
        errorMessage: action.payload,
        loading: false
      };
      return state;
    case REQUEST.REQUEST, REQUEST.TRIGGER:
      state = {
        ...state,
        error: false,
        loading: true
      };
      return state;

    default:
      return state;
  }
}
