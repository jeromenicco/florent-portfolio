
   
import { createSlice } from "@reduxjs/toolkit";

export const fullScreenSlice = createSlice({
  name: "fullScreen",
  initialState: {
    visible: false,
    project: []
  },
  reducers: {
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
    setProject: (state, action) => {
        state.project = action.payload;
    }
  },
});

export const { setVisible, setProject } = fullScreenSlice.actions;

export default fullScreenSlice.reducer;