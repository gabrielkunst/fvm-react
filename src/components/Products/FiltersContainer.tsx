import { Filter } from "lucide-react";
import { ButtonIcon } from "../ButtonIcon";
import { SortDropdown } from "./SortDropdown";

export function FiltersContainer() {
	const onFilterButtonClick = () => {};

	return (
		<div className="flex flex-wrap items-center justify-between gap-2">
			<h1 className="text-2xl font-semibold sm:text-3xl">Products</h1>
			<div className="flex items-center justify-between w-full gap-2 xs:w-fit">
				<ButtonIcon icon={<Filter />} onClick={onFilterButtonClick} />
				<SortDropdown />
			</div>
		</div>
	);
}
