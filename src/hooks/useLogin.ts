import { useState } from "react";

interface OnLoginProps {
	email: string;
	password: string;
}

export function useLogin() {
	const [isLoading, setIsLoading] = useState(false);

	const onLogin = async ({ email, password }: OnLoginProps) => {
		try {
			setIsLoading(true);
			console.log(email);
			console.log(password);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, onLogin };
}
