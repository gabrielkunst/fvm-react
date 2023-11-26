import { auth } from "@/config/firebase";
import { UserController } from "@/controllers/UserController";
import { User } from "@/models/User";
import { parseFirebaseError } from "@/utils/parseFirebaseError";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router";

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

			const userData = {
				email,
				name,
				userId: user.uid,
			};

			const createdUserDoc = await UserController.createUserDoc(userData);

			if (!createdUserDoc) {
				throw new Error("Error creating user doc");
			}

			const loggedUser = new User({
				...createdUserDoc,
				id: user.uid,
			});

			login(loggedUser);

			toast.success("Account created successfully!");

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
