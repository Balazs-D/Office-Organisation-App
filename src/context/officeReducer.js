import {
    IS_HERE,
    CLICKED
} from './types';


export default(state, action)=>{
    switch (action.type){
        
        case IS_HERE:
            return{
                ...state,
                state : action.payload,  
                                            
            
            };

        case CLICKED:
            return{
                ...state,
                state: action.payload,
            }

        
            
        //return{
        //    ...state,
        //    key: value,
        //    key: value
        //     }

        default:
             return state;
    }
}