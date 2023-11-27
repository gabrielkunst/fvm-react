import { useAuth } from "@/hooks/useAuth";
import { User } from "@/models/User";

interface UserInfoProps {
	user: User;
}

export function UserInfo({ user }: UserInfoProps) {
	const { isUserLoggedIn } = useAuth();

	return (
		<section className="flex flex-col gap-2 p-2 border rounded-lg md:w-[250px]">
			<h3 className="text-lg font-semibold">
				{isUserLoggedIn ? user.name : "Anônimo"}
			</h3>
			<p>{isUserLoggedIn ? "(45) 991231282" : "(XX) XXXXXXXXX"}</p>
			<p>
				Membro desde{" "}
				{isUserLoggedIn ? `${user.memberSince}` : "DD/MM/YYYY"}
			</p>
			<p>Mora em Foz do Iguaçu - PR</p>
		</section>
	);
}
