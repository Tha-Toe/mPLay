import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  album: [],
  album1: [],
  album2: [],
  album3: [],
  searchResultRDX: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addSearchResult: (state,action) => {
      let searchResultRDX = state.searchResultRDX;
      let payload = action.payload;
      state.searchResultRDX = [...payload];
//        state.searchResultRDX = action.payload;
//        state.searchResultRDX.push(action.payload);
    },
      addAlbum: (state,action) => {
        let album = state.album;
        let payload = action.payload;
        state.album = [...album,...payload];
          //state.album.push(action.payload)
      },
      addAlbum1: (state,action) => {
        let album = state.album1;
        let payload = action.payload;
        state.album1 = [...album,...payload];
          //state.album.push(action.payload)
      },
      addAlbum2: (state,action) => {
        let album = state.album2;
        let payload = action.payload;
        state.album2 = [...album,...payload];
          //state.album.push(action.payload)
      },
      addAlbum3: (state,action) => {
        let album = state.album3;
        let payload = action.payload;
        state.album3 = [...album,...payload];
          //state.album.push(action.payload)
      }

  }
})


// Action creators are generated for each case reducer function
export const { addAlbum,addAlbum1,addAlbum2,addAlbum3,addSearchResult} = dataSlice.actions



export default dataSlice.reducer;