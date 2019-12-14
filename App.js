import React from 'react';
import Login from './screens/Login'

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './store/reducers';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import firebase from 'firebase/app';
import configFirebase from './store/configFirebase';

const store = createStore(reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(configFirebase),
    // reactReduxFirebase(configFirebase),
  )
);

const rrfProps = {
  firebase,
  config: configFirebase,
  dispatch: store.dispatch,
  createFirestoreInstance
}

const App = () => {
  return(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Login />
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default App;