const setFirebase = (state = null, action) => {
    switch(action.type){
        case "SET_ENVIAR":
            return action.payload;
        case "SET_ERROR":
            return action.payload
        case "SET_NULL":
            return action.payload
        default:
            return state;
    }
}

export default setFirebase;