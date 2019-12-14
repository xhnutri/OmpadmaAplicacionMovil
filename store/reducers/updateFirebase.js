const updateFirebase = (state = null, action) => {
    switch(action.type){
        case "UPDATE_ENVIAR":
            return action.payload;
        case "UPDATE_ERROR":
            return action.payload
        case "SET_NULL":
            return action.payload
        default:
            return state;
    }
}

export default updateFirebase;