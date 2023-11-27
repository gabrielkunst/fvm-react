import { UserType } from "@/@types/UserType";
import { Loading } from "@/components/Loading";
import { auth } from "@/config/firebase";
import { UserController } from "@/controllers/UserController";
import { User } from "@/models/User";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface AuthContextProviderProps {
	children: React.ReactNode;
}

interface AuthContextProps {
	user: User | null;
	isUserLoggedIn: boolean;
	login: (user: User) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
	user: null,
	isUserLoggedIn: false,
	login: () => {},
	logout: () => {},
});

export function AuthContextProvider({ children }: AuthContextProviderProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState<User | null>(null);
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	const login = (user: User) => {
		setUser(user);
		setIsUserLoggedIn(true);
	};

	const logout = () => {
		setUser(null);
		setIsUserLoggedIn(false);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
			if (!firebaseUser) {
				setIsLoading(false);
				return;
			}

			const userDocData = await UserController.readUserDoc({
				userId: firebaseUser.uid,
			});

			if (!userDocData) {
				toast.error("Erro ao carregar usuário");
				await auth.signOut();
				setIsLoading(false);
				return;
			}

			const loggedUser = new User(userDocData as UserType);
			login(loggedUser);
			setIsLoading(false);
		});

		return () => unsubscribe();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<AuthContext.Provider value={{ user, isUserLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
