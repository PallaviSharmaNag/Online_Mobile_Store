import users_json from "../data/users.json";
import { LOGIN } from "../actions";

const initialState = {
    user: {
        username: "pallavi",
        password:"pallavi123"
    },
    isLoggedIn: false 
}

function loginReducer(state = initialState, action){
    switch (action.type) {
        case LOGIN:
        console.log("reached here");
         if(state.user == action.payload.username && state.password == action.payload.password)
            return Object.assign({},state, {isLoggedIn: true});
         else
         return Object.assign({},state, {isLoggedIn: false});
        default:
          return state;
      }
}

export default loginReducer;