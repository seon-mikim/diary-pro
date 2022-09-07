import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userslice"

const store = configureStore({
  reducer: {
      user,
  },
});

export default store;