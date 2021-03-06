import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import './index.css';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/combineReducer';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import firebaseconfig from './config/firebaseconfig'
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebaseconfig,{useFirestoreForProfile:true,userProfile:'users',attachAuthIsReady:true}),reduxFirestore(firebaseconfig)
    
    )

    );
store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
