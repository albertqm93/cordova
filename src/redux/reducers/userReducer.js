import { user } from '../../logic/User'

const defaultState = { 
  logged: false,
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_USER': {
      console.log("action", action)
      return user(state, action);
    }
    default: {
      return state;
    }
  }
}
