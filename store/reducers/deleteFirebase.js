const deleteFirebase = (state = null, action) => {
    switch(action.type){
        case "DELETE_ENVIAR":
            return action.payload;
        case "DELETE_ERROR":
            return action.payload
        case "SET_NULL":
            return action.payload
        default:
            return state;
    }
}

export default deleteFirebase;