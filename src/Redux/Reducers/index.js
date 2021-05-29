import { combineReducers } from "redux";
import { UserAuthenicationReducer } from "./UserAuthenicationReducer";

const appReducer = combineReducers({
    UserAuthenicationReducer
});


export default appReducer
// export default rootReducer = (state, action) => {

//     return appReducer(state, action);
// };
