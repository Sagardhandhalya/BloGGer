
const initial={
    authError:null
};
const authReducer=(state= initial, action )=>{
    switch(action.type)
    {
        case 'LOGIN_SUCCESS':
            state={
                ...state,authError:null
            }
            console.log("login successfully");
            return state;
       case 'LOGIN_FAILED':
             state={
                ...state,authError:"login failed"
                    }
            console.log("login failed"); 
            return state; 
        case "LOGOUT_SUCCESS":
             console.log("log out success"); 
             return state;

        case "SIGNUP_SUCCESS":
            state= {
                    ...state,authError:null

            }
        return state;

        case "SIGNUP_FAILED":
                state= {
                        ...state,authError:action.err.message
    
                }
            return state;
        
        default:
            return state;
        }
}

export default authReducer;