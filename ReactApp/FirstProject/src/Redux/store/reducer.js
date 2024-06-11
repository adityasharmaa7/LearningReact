import { initialState } from "./state";
import { INCRIMENT } from "./constant";
import { DECRIMENT } from "./constant";

// Reducer function which accepts state and action
function counter(state = initialState,action) {
    // based on the action type the reducer will update the state
    switch(action.type) {
        case INCRIMENT:
            return {                     // we update the state by returning a new Obj {} which contains the copy of old state (...state) and newly updated state 
                ...state,
                count: state.count + 1
            }
        case DECRIMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default :                      // there should we a default state because if the action.type did not matches then we will return the original state  
            return{state};
            
    }
};


export default counter;