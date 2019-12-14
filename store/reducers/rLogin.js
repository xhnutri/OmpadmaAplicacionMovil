const rLogin = (state = false, action) => {
    switch(action.type){
        case "INICIAR_SESION":
            return action.payload
        case "CERRAR_SESION":
            return false
        default:
            return state;
    }
}

export default rLogin;