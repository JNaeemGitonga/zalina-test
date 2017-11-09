import request from 'superagent';


export const ADD_IG_POST =  'ADD_IG_POST';
export const addIGPost = post => ({
    type:ADD_IG_POST,
    post
})

export const getIGPost = () => dispatch => {
    
    request
        .get(`https://immense-cliffs-82861.herokuapp.com/https://api.instagram.com/v1/users/308921940/media/recent/?access_token=308921940.d73391c.4795a30aa57342e1a2f38028a53a53c2`)
      
        .then(res => {
            if(res.ok) {
                console.log(res.body.data)
                dispatch(addIGPost(res.body.data))
            }
        })
        .catch(err => console.log(err))
}



// let feed = new Instafeed({
//     get: 'user',
//     userId: '308921940',
//     clientId: clientId,
//     accessToken: secret,
//     sortBy: 'most-recent',
//     resolution:'standard_resolution',
//     type: 'images',
//     limit: 20,
//     links: true,
//     template: ` <div id='data-div' class='ig-pic-box'
//                 data-link={{link}} 
//                 >
                
//                 <img id='ig-pic' onclick='myFunction({{model}})'  class='ig-pic link' src="{{image}}" />
                
//                 <div class="ig-overlay"  >
//                     <div class='ig-overlay-content'>
//                         <div > 
//                             <p class='ig-text'>{{caption}}</p>
                            
//                         </div>
                                
//                         </div>
//                     </div>
//                 </div> `
// Greatwaves1
// });
// feed.run(); 
// let instafeed = (<div id='instafeed'></div>)