import request from 'superagent';


export const ADD_IG_POST =  'ADD_IG_POST';
export const addIGPost = post => ({
    type:ADD_IG_POST,
    post
})

export const ERROR_IG = 'ERROR_IG';
export const errorIg = bing => ({
    type:ERROR_IG,
    bing
})
 
export const getIGPost = () => dispatch => {
    return new Promise ((resolve,reject) => {
        request
        .get(`https://immense-cliffs-82861.herokuapp.com/https://api.instagram.com/v1/users/308921940/media/recent/?access_token=308921940.d73391c.4795a30aa57342e1a2f38028a53a53c2`)
        .then(res => {
            if(res.ok) {
                dispatch(addIGPost(res.body.data))
                resolve()
            }
            else {
                dispatch(errorIg())
                reject()
            }
        })
        .catch(err => {
            dispatch(errorIg())
        })
    })
}



