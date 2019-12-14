export const set = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        if(payload.collection === "Pacientes"){
            const asignados = ["Medicos", "Enfermeros", "Doctores", "Personal de seguridad"];
            const idasignados = ["Medico", "Enfermero", "Doctor", "Personal de seguridad"];
            asignados.forEach((id, i)=>{
                if(payload[idasignados[i]]){
                    firestore.collection(id).doc(payload.form[idasignados[i]]).update({"Pacientes": payload[idasignados[i]]})
                }
            })
        }
        firestore.collection(payload.collection).add({
            ...payload.form,
        }).then(() => {
            dispatch({type: 'SET_ENVIAR', payload: true})
        }).catch((err) => {
            dispatch({type: 'SET_ERROR', payload: false})
        })
    }   
};

export const remove = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection(payload.collection).doc(payload.id).delete()
        .then(() => {
            dispatch({type: 'DELETE_ENVIAR', payload: true})
        }).catch((err) => {
            dispatch({type: 'DELETE_ERROR', payload: false})
        })
    }   
};

export const update = payload => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        if(payload.collection === "Pacientes"){
            const asignados = ["Medicos", "Enfermeros", "Doctores", "Personal de seguridad"];
            const idasignados = ["Medico", "Enfermero", "Doctor", "Personal de seguridad"];
            asignados.forEach((id, i)=>{
                if(payload[idasignados[i]]){
                    firestore.collection(id).doc(payload.form[idasignados[i]]).update({"Pacientes": payload[idasignados[i]]})
                }
            })
        }
        firestore.collection(payload.collection).doc(payload.id).update({
            ...payload.form,
        })
        .then(() => {
            dispatch({type: 'UPDATE_ENVIAR', payload: true})
        }).catch((err) => {
            dispatch({type: 'UPDATE_ERROR', payload: false})
        })
    }   
};

export const setNull = payload => ({
    type: 'SET_NULL',
    payload,
});