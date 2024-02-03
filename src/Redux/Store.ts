import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Features/CounterSlice";
import logger from "redux-logger";
import Logger from "./Features/middleware/logger";
export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
  // eitah production e dite hobe tahole redux dev toll e r data dekhabe nah
  // devTools: false,
});

console.log(store.getState());
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
