import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./users/slice";
const persintanceMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("reduxState", JSON.stringify(store.getState()));
};

const syncWithDatrabaseMiddleware = (store) => (next) => (action) => {
	const { type, payload } = action;

	next(action);

	if (type === "users/deleteUserById") {
		console.log("delete user", payload);
	}
};
const store = configureStore({
	reducer: { users: usersReducer },
	middleware: [persintanceMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
