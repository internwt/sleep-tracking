import { combineReducers } from "redux";
import { UserAuthenicationReducer } from "./UserAuthenicationReducer";
import { sleepTimeReducer } from "./SleepTimeReducer"
const appReducer = combineReducers({
    UserAuthenicationReducer,
    sleepTimeReducer
});


export default appReducer
// export default rootReducer = (state, action) => {

//     return appReducer(state, action);
// };
