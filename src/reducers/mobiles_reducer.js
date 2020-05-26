import mobiles_json from "../data/mobiles.json";
import { ADD_MOBILE } from "../actions";

function mobiles(state = mobiles_json, action) {
  switch (action.type) {
    case ADD_MOBILE:
      let mobiles = state.filter(mobile => mobile.id !== action.id);
      return mobiles;
    default:
      return state;
  }
}

export default mobiles;
