import { SortDropdown } from "./SortDropdown";
import { SortObject } from "@/@types/SortObjectType";

interface FilterOptionsProps {
	setSort: (sort: SortObject) => void;
	sort: SortObject;
}

export function FilterOptions({ setSort, sort }: FilterOptionsProps) {
	return (
		<div className="flex items-center justify-between w-full gap-2 xs:w-fit">
			<SortDropdown setSort={setSort} sort={sort} />
		</div>
	);
}
