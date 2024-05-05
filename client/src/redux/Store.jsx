import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
// import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userReducer });
const persisConfig = {
  key: "root",
  version: 1,
  storage,
};
// const persistreducer = persistReducer({ persisConfig, rootReducer });
const localstorage = persistReducer(persisConfig, rootReducer);
export const store = configureStore({
  reducer: localstorage,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
