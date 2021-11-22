import {ACTIONS} from "../../../actions/client/template/ClientHeaderAction";
import {createStore} from "redux";

const init = {
  categories: []
}

const reducer = (state = init, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_CATEGORY:
      state.categories.push(...action.categories);
      break;
    default: break;
  }
  return {...state};
}

export default createStore(reducer);