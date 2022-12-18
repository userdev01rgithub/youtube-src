// Например форма. Слайс - отвечает за состояние стоку
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            // state - состоярние 
            // action - событие

            state.firstName = action.payload 
            // payLoad - данные, которые будут передаваться с другогой формы

        },
        setLastName: (state, action) => {
            // state - состоярние 
            // action - событие

            state.lastName = action.payload 
            // payLoad - данные, которые будут передаваться с другогой формы

        },

    }
})

export const {setFirstName, setLastName} = userSlice.actions
export default userSlice.reducer