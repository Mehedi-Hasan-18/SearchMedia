import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../redux/features/searchSlice"
import collcetionReducer from "../redux/features/collectionSlice"

export const store = configureStore({
  reducer: { search: searchSlice.reducer ,
    collection: collcetionReducer
  },
});
