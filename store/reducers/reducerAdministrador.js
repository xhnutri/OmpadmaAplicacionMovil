const reducerAdministrador = (state = true, action) => {
    switch(action.type){
        case "SET_INICIAR_SESION":
            return action.payload;
        case "SET_CERRAR_SESION":
            return action.payload
        default:
            return state;
    }
}

export default reducerAdministrador;