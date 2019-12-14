const PacienteReducer = (state = {ordered:{pacientes: ["lknon"]}}, action) => {
    switch(action.type){
        case "SET":
            return state;
        case "SET_ERROR":
            return action.payload
        default:
            return state;
    }
}

export default PacienteReducer;