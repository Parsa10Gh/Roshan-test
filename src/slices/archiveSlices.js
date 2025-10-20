    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {
    filesList: [],
    currentPage: 1,
    openDetailId: null,
    savedIndex: 0,
    itemsPerPage: 8,
    isText: true,
    loading: true,
    };

    const archiveSlice = createSlice({
    name: 'archive',
    initialState,
    reducers: {
        setFilesList: (state,action) => { state.filesList = action.payload },
        changeCurrentPage: (state,action) => {state.currentPage = action.payload},
        setOpenDetailId: (state,action) => {state.openDetailId = action.payload},
        setSavedIndex: (state,action) => {state.savedIndex = action.payload},
        setItemsPerPage: (state , action) => { state.itemsPerPage = action.payload},
        changeIsText: (state , action) => { state.isText = action.payload },
        setLoading: (state , action) => {state.loading = action.payload}
    },
    });

    export const { setFilesList , changeCurrentPage , setOpenDetailId , setSavedIndex, setItemsPerPage , changeIsText , setLoading } = archiveSlice.actions;
    export default archiveSlice.reducer;
