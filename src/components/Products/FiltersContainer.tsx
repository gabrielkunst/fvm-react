import { PageTitle } from "../PageTitle";
import { useProducts } from "@/hooks/useProducts";
import { FilterOptions } from "./FilterOptions";
import { XIcon } from "lucide-react";
import { Button } from "../Button";

export function FiltersContainer() {
	const { setSort, query, setQuery } = useProducts();

	const handleResetQuery = () => {
		setQuery("");
	};

	return (
		<div className="flex flex-wrap items-center justify-between gap-2">
			<PageTitle>Produtos {query && ` / ${query}`}</PageTitle>
			<div className="flex items-center gap-2">
				<Button
					onClick={handleResetQuery}
					variation="outlined"
					reverse
					icon={<XIcon />}
				>
					Limpar filtros
				</Button>
				<FilterOptions setSort={setSort} />
			</div>
		</div>
	);
}
