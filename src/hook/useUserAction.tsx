import { deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserAction = () => {
	const dispatch = useAppDispatch();

	const removeUser = (id: string) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser };
};
