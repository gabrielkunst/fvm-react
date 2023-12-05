import { auth } from "@/config/firebase";
import { UserController } from "@/controllers/UserController";
import { User } from "@/models/User";
import { parseFirebaseError } from "@/utils/parseFirebaseError";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router";
import { UserType } from "@/@types/UserType";

interface OnSignupParams {
	name: string;
	email: string;
	password: string;
}

export function useSignup() {
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const { login } = useAuth();

	const onSignup = async ({ name, email, password }: OnSignupParams) => {
		try {
			setIsLoading(true);

			const { user } = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const userData: UserType = {
				email,
				name,
				createdAt: new Date(),
				id: user.uid,
				ownProducts: []
			};

			await UserController.createUserDoc(userData);


			const loggedUser = new User(userData);

			login(loggedUser);

			toast.success("Conta criada com sucesso!");

			navigate("/");
		} catch (error: any) {
			if (auth.currentUser) {
				await auth.signOut();
			}

			console.error(error);
			const parsedError = parseFirebaseError(error.code);
			toast.error(parsedError);
		} finally {
			setIsLoading(false);
		}
	};

	return {
		onSignup,
		isLoading,
	};
}
