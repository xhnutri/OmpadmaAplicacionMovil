export const setPaciente = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('pacientes').add({
            ...payload,
        }).then(() => {
            dispatch({type: 'SET_PACIENTE', payload})
        }).catch((err) => {
            dispatch({type: 'SET_PACIENTE_ERROR', err})
        })
        
    }   
};