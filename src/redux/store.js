// import { configureStore } from '@reduxjs/toolkit';
// import { OrderSlice } from './orders/slice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'orders',
//   storage,
//   whitelist: ['order'],
// };

// const persistOrdersReducer = persistReducer(persistConfig, OrderSlice.reducer);

// export const store = configureStore({
//   reducer: {
//     orders: persistOrdersReducer,
//   },
    
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// export const persistor = persistStore(store);

