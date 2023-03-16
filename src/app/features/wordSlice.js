import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    word: ''
}

const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setWordCharacters: (state , actions) => {
        state.word = actions.payload
    },
    stateSet: (state, actions)=>{
      state.word = actions.payload
    }    
  },
})

export const {setWordCharacters} = wordSlice.actions
export default wordSlice.reducer