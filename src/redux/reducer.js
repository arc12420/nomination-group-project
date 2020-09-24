import axios from 'axios';

const initialState = {
  user: { user_id: 0, email: '' },
  isLoggedIn: false,
  fundraisers: [],
  donation: {}
};

const ADD_DONATION = 'ADD_DONATION';
export function addDonation(donation) {
  return {
    type: ADD_DONATION,
    payload: donation
  }
}

// const GET_DONATION = 'GET_DONATION';
// export function getDonation(donation) {
//   return {
//     type: GET_DONATION,
//     payload: donation
//   }
// }

const GET_FUNDRAISERS = 'GET_FUNDRAISERS';
export function getFundraisers(fundraisers) {
  return {
    type: GET_FUNDRAISERS,
    payload: fundraisers
  }
}

const LOGIN_USER = 'LOGIN_USER';
export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user
  }
}

const LOGOUT_USER = 'LOGOUT_USER';
export function logoutUser() {
  return {
    type: LOGOUT_USER,
    payload: initialState
  }
}

const GET_USER = 'GET_USER';
export function getUser() {
  const user = axios
    .get('/auth/user')

  return {
    type: GET_USER,
    payload: user
  }
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER:
      return { ...state, user: payload, isLoggedIn: true }
    case LOGOUT_USER:
      return { ...state, ...payload }
    case GET_USER + '_PENDING':
      return state;
    case GET_USER + '_FULFILLED':
      return { ...state, user: payload.data, isLoggedIn: true }
    case GET_USER + '_REJECTED':
      return initialState;
    case GET_FUNDRAISERS:
      return { ...state, fundraisers: payload };
    case ADD_DONATION:
      return { ...state, donation: payload };
    default:
      return initialState;
  }
}