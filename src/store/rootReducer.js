//tüm stateleri topladığım yer

import { combineReducers } from "redux";
import applicationReducer from "./reducers/applicationReducer";

const rootReducer = combineReducers({

    application : applicationReducer,
    
})

export default rootReducer; 

