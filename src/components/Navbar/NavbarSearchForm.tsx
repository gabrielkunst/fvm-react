import { useProducts } from "@/hooks/useProducts";
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";

export function NavbarSearchForm() {
	const { setQuery } = useProducts();
	const [currentQuery, setCurrentQuery] = useState<string>("");
	const navigate = useNavigate();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		const trimmedQuery = currentQuery.trim();
		setQuery(trimmedQuery);
		navigate("/products");
		setCurrentQuery("");
	};

	return (
		<form
			className="p-2 rounded-lg items-center justify-center gap-2 min-w-[300px] bg-neutral-200 hidden md:flex"
			onSubmit={onSubmit}
		>
			<input
				value={currentQuery}
				onChange={(e) => setCurrentQuery(e.target.value)}
				type="text"
				placeholder="Buscar ferramentas"
				className="flex-1 text-sm outline-none"
			/>
			<button type="submit">
				<Search size={16} />
			</button>
		</form>
	);
}
