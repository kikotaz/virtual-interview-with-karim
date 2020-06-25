/*
This file will configure Redux-Persist to keep the state in localStorage.
This will help to preserve Redux's global state in events such as page refresh
 */
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer';

//Configuring persisted store
const persistConfig = {
    key: 'root',
    storage,
}

//Configuring persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }