import { PageTitle } from "../PageTitle";
import { useProducts } from "@/hooks/useProducts";
import { FilterOptions } from "./FilterOptions";
import { XIcon } from "lucide-react";
import { Button } from "../Button";
import { DEFAULT_SORT } from "@/constants/defaultSort";

export function FiltersContainer() {
	const { setSort, query, setQuery, sort } = useProducts();

	const handleResetQuery = () => {
		setQuery("");

		if (sort.sortDirection === DEFAULT_SORT.sortDirection) {
			return;
		}

		setSort(DEFAULT_SORT);
	};

	return (
		<div className="flex flex-wrap items-center justify-between gap-2">
			<PageTitle>Produtos {query && ` / ${query}`}</PageTitle>
			<div className="flex flex-wrap items-center gap-2">
				<Button
					onClick={handleResetQuery}
					variation="outlined"
					reverse
					icon={<XIcon />}
				>
					Limpar filtros
				</Button>
				<FilterOptions setSort={setSort} sort={sort} />
			</div>
		</div>
	);
}
