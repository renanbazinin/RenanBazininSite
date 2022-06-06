

const initialUserState = {
    lang:"en"
}


function reducer(state = initialUserState, action) {

    

    switch (action.type) {

        case "ENGLISH":{
            return { ...state, lang:"en"};
   
        }
            //return { ...state, allUsers:[...action.payload]};
        case "HEBRAW":
            return { ...state, lang:"he"};

        default:
            return state
    }

}

export default reducer