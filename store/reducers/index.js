// import firestore from './PacienteReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import reducerAdministrador from './reducerAdministrador';
import setFirebase from './setFirebase';
import deleteFirebase from './deleteFirebase';
import updateFirebase from './updateFirebase';
import rLogin from './rLogin';

// const reducer = (state = true, action) => {
    
// //     firestore: firestoreReducer 
// }

const reducer = combineReducers({
    set_firebase: setFirebase,
    delete_firebase: deleteFirebase,
    update_firebase: updateFirebase,
    validar: reducerAdministrador,
    login: rLogin,
    // inicio: InicioReducer,
    // firestore,
    firestore: firestoreReducer 
});

export default reducer
