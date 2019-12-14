export const iniciarSesion = payload => ({
    type: 'INICIAR_SESION',
    payload,
});

export const cerrarSesion = payload => ({
    type: 'CERRAR_SESION',
    payload,
});
