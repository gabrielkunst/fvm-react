import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

export function NavbarSearchForm() {
	const [query, setQuery] = useState<string>("");

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<form
			className="p-2 rounded-lg items-center justify-center gap-2 min-w-[300px] bg-neutral-200 hidden md:flex"
			onSubmit={onSubmit}
		>
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
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
