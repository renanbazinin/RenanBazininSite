

const initialUserState = {
    lang:"en"
}


function reducer(state = initialUserState, action) {

    

    switch (action.type) {

        case "ENGLISH":{
            return "en"
        }
            //return { ...state, allUsers:[...action.payload]};
        case "HEBRAW":
            return "he"

        default:
            return state
    }

}

export default reducer