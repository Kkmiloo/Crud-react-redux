import { addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserAction = () => {
	const dispatch = useAppDispatch();

	const removeUser = (id: string) => {
		dispatch(deleteUserById(id));
	};

	const addUser = ({ name, email, github }) => {
		dispatch(addNewUser({ name, email, github }));
	};
	return { removeUser, addUser };
};
