import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getFiles = createAsyncThunk(
  'fileManager/files/getFiles',
  async () => {
    const response = await axios.get('/api/file-manager-app/files');
    const data = await response.data;

    return data;
  }
);

const filesAdapter = createEntityAdapter({});

export const {
  selectAll: selectFiles,
  selectEntities: selectFilesEntities,
  selectById: selectFileById,
} = filesAdapter.getSelectors((state) => state.fileManager.files);

const fileSlice = createSlice({
  name: 'fileManager/files',
  initialState: filesAdapter.getInitialState({
    selectedItemId: '1',
  }),
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItemId = action.payload;
    },
  },
  extraReducers: {
    [getFiles.fulfilled]: filesAdapter.setAll,
  },
});

export const { setSelectedItem } = fileSlice.actions;

export default fileSlice.reducer;
