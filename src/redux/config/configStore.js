import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userslice"
import diary from "../modules/diarySilce"

const store = configureStore({
  reducer: {
      user,
      diary,

  },
});

export default store;