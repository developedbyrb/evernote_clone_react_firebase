import firebaseReducer from 'react-redux-firebase';
import combineReducers from 'redux';
import FirestoreReducer from 'redux-firestore';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: FirestoreReducer
})

export default rootReducer;