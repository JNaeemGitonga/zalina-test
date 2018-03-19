
export const initialState = {
    igPost:null,
    error:false
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_IG_POST':
            return Object.assign({}, state, {
                igPost:action.post
            })
        case 'ERROR_IG':
            return Object.assign({}, state, {
                error:true
            })
        default:
            return state 
    }
}

export default reducer;