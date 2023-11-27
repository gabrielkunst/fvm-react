/* eslint-disable react-hooks/exhaustive-deps */
import { UserController } from "@/controllers/UserController";
import { User } from "@/models/User";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

export function useUser() {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { userId } = params;

				if (!userId) {
					toast.error("Usuário não encontrado");
					navigate(-1);
					return;
				}

				const user = await UserController.readUserDoc({ userId });
				setUser(user);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
				toast.error("Erro ao carregar usuário");
				navigate(-1);
			}
		};

		fetchUser();
	}, []);

	return {
		user,
		isLoading,
	};
}
