import { createSlice } from "@reduxjs/toolkit";
import storage from "../../utils/storage";

// const initialState = localStorage.getItem('user') ? 
//     JSON.parse(localStorage.getItem('user') || '') : { email: "", token: "", id: "" };

interface User {
    email: string;
    token: string;
    id: string;
}

const initialState: User = storage.get<User>('user') ? 
    storage.get<User>('user') : { email: "", token: "", id: "" };


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;

            storage.set("user", state);
        },
        removeUser: (state) => {
            state.email = "";
            state.token = "";
            state.id = "";

            storage.set("user", state);
        }
    }
})

// 위 코드는 JSON.stringify(state)를 피하고 Redux state의 불변성을 유지합니다. 
// 또한 strage 대신 storage를 사용하도록 수정했습니다.
export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;