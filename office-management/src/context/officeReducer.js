import {
    IS_HERE
} from './types';


export default(state, action)=>{
    switch (action.type){
        
        case IS_HERE:
            return{
                ...state,
            
            };

        
            
        //return{
        //    ...state,
        //    key: value,
        //    key: value
        //     }

        default:
             return state;
    }
}