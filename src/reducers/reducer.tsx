const initialState:any = [];

export const reducer = (state = initialState, action: {type:any, payload:any}) => {
    if(action.type === 'add'){
        return action.payload;
    }
    return state
}