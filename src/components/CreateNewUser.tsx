import { Button, Card, TextInput, Title } from "@tremor/react";
import { useUserAction } from "../hook/useUserAction";

export function CreateNewUser() {
	const { addUser } = useUserAction();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		addUser({ name, email, github });
	};
	return (
		<Card>
			<Title>Crear nuevo usuario</Title>
			<form onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Nombre" />
				<TextInput name="email" placeholder="Email" />
				<TextInput name="github" placeholder="Github" />
				<Button>Crear</Button>
			</form>
		</Card>
	);
}
