import { PageTitle } from "../PageTitle";
import { useProducts } from "@/hooks/useProducts";
import { FilterOptions } from "./FilterOptions";

export function FiltersContainer() {
	const { setSort } = useProducts();
	const onFilterButtonClick = () => {};

	return (
		<div className="flex flex-wrap items-center justify-between gap-2">
			<PageTitle>Produtos</PageTitle>
			<FilterOptions onFilter={onFilterButtonClick} onSort={setSort} />
		</div>
	);
}
