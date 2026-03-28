// Redux sendo aplicado da forma antiga, sem o toolkit, para fins de estudo e comparação

interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
}

interface UserAction {
  type: string;
  payload?: User;
}

export function userReducer(state = initialState, action: UserAction): UserState {
  if (action.type === 'user/login') {
    return {
      ...state,
      user: action.payload ?? null,
    }
  } else if (action.type === 'user/logout') {
    return {
      ...state,
      user: null,
    }
  }

  return state;
}