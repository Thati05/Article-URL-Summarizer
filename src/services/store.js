import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// We eill pass in a object inside the function configureStore
// which is a reducer is going to allow as take what we only need
// middleware allows us to do something with the state before we get it. We will be using the defalt setup 


export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware)

});

{/*We are cofiguring a store, a store is a global state
that save the entire information of our application but in most case we do not need
the entire state we only need to reducer it to a specific slice of pie
and in this case it's going to be the article API, meaning we just want to get something from the API     */}