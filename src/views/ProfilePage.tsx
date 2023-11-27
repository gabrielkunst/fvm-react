import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PageTitle } from "@/components/PageTitle";
import { UserInfo } from "@/components/Profile/UserInfo";
import { UserProducts } from "@/components/Profile/UserProducts";
import { useUser } from "@/components/Profile/hooks/useUser";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import toast from "react-hot-toast";

export function ProfilePage() {
	const { isLoading, user } = useUser();
	const { isUserLoggedIn } = useAuth();

	useEffect(() => {
		if (!isUserLoggedIn) {
			toast.error(
				"Você precisa estar logado para ver os dados do usuário"
			);
		}
	}, [isUserLoggedIn]);

	return (
		<div className="flex-1 flex flex-col p-5 sm:p-10 md:p-12 min-h-[calc(100svh-80px)] md:min-h-0">
			<PageTitle className="mb-2">Contato</PageTitle>
			<main
				className={`flex flex-1 ${
					isLoading && "items-center justify-center"
				}`}
			>
				{isLoading && <LoadingSpinner />}
				{!isLoading && user && (
					<div className="flex flex-col flex-1 gap-4 md:flex-row animate-fade-in">
						<UserInfo user={user} />
						<UserProducts user={user} />
					</div>
				)}
			</main>
		</div>
	);
}
