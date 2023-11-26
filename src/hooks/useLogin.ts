import { auth } from "@/config/firebase";
import { UserController } from "@/controllers/UserController";
import { parseFirebaseError } from "@/utils/parseFirebaseError";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./useAuth";
import { User } from "@/models/User";

interface OnLoginProps {
	email: string;
	password: string;
}

export function useLogin() {
	const [isLoading, setIsLoading] = useState(false);
	const { login } = useAuth();

	const onLogin = async ({ email, password }: OnLoginProps) => {
		try {
			setIsLoading(true);
			const { user } = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			const userDocData = await UserController.readUserDoc({
				userId: user.uid,
			});

			if (!userDocData) {
				throw new Error("User doc not found!");
			}

			const loggedUser = new User(userDocData);
			login(loggedUser);

			toast.success("Login feito com sucesso!");
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

	return { isLoading, onLogin };
}
