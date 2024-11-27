import { combineReducers } from "redux";
import menuReducer from "./MenuModule";
import cartReducer from "./CartModule";

//combineReducers로 각각 개별 리듀서 모듈을 하나의 리듀서로 구성한다
const rootReducer = combineReducers({
    menuReducer,
    cartReducer
});

export default rootReducer;
