import ACTIONS from "../actions/index"
const initialState={
    users:[],
    isLogged:false,
    isAdmin:false
}
const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ACTIONS.LOGIN:
            return{
                ...state,isLogged:true
            }
    
        default:
            return state
    }
}
export default authReducer;
