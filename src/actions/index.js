export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTER = "REMOVE_CHARACTER";
export const ADD_MOBILE = "ADD_MOBILE";
export const LOGIN = "LOGIN";

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id
  };
  return action;
}

export function removeCharacterById(id) {
  const action = {
    type: REMOVE_CHARACTER,
    id
  };
  return action;
}

export function addMobileById(id) {
  const action = {
    type: ADD_MOBILE,
    id
  };
  return action;
}

export function login(name,password) {
  const action = (name,password) => {
    return {
      type: LOGIN,
      payload: {
        username: name,
        password: password
      }
    }
  }
  return action;
}

