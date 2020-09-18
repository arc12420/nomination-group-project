import axios from 'axios';

const initialState = {
  user: { user_id: 0, email: '' },
  isLoggedIn: false
};

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
    .get('/auth/user,authCtrl.getUser')
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .catch((err) => console.log(err))

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
      return { ...state, user: payload, isLoggedIn: true }
    case GET_USER + '_REJECTED':
      return initialState;
    default:
      return initialState;
  }
}