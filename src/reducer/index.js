export const initialState = {
    igPost:null
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_IG_POST':
            return Object.assign({}, state, {
                igPost:action.post
            })
        default:
            return state 
    }
}

export default reducer;