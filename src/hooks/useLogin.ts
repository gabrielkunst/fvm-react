import { auth } from "@/config/firebase";
import { parseFirebaseError } from "@/utils/parseFirebaseError";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";

interface OnLoginProps {
	email: string;
	password: string;
}

export function useLogin() {
	const [isLoading, setIsLoading] = useState(false);

	const onLogin = async ({ email, password }: OnLoginProps) => {
		try {
			setIsLoading(true);
			await signInWithEmailAndPassword(auth, email, password);
			toast.success("Login feito com sucesso!");
		} catch (error: any) {
			const parsedError = parseFirebaseError(error.code);
			toast.error(parsedError);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, onLogin };
}
