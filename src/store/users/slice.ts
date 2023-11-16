import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserId = string;
export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UsersWithId extends User {
	id: UserId;
}

const initialState: UsersWithId[] = [
	{
		id: "2",
		name: "Peter Doe",
		email: "camilo.reyes@gre.com",
		github: "tazmano",
	},
	{ id: "3", name: "Camilo Reyes", email: "caca@gmail.com", github: "tazmano" },
	{
		id: "4",
		name: "John Doe",
		email: "pepe@hmal.com",
		github: "midudev",
	},
	{
		id: "5",
		name: "Peter Doe44",
		email: "pepe@gmaiol.com",
		github: "tazman2",
	},
	{
		id: "6",
		name: "Peter Doe2",
		email: "doe@gmal.dom",
		github: "tazma21",
	},
];

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export const { deleteUserById } = usersSlice.actions;

export default usersSlice.reducer;
