import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./CombineReducer"

// Redux Persist Configuration
const persistConfig = {
    key: 'root',
    storage,
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Store
const store = createStore(persistedReducer);

// Create Persistor
const persistor = persistStore(store);

// Export both store and persistor
export { store, persistor };
