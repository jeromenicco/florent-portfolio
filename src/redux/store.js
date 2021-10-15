import { configureStore } from "@reduxjs/toolkit"
import fullScreenReducer from "./slices/fullScreenSlice"

export default configureStore({
  reducer: {
    fullScreen: fullScreenReducer,
  },
})