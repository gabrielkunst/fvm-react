import { Filter } from "lucide-react";
import { ButtonIcon } from "../ButtonIcon";
import { SortDropdown } from "./SortDropdown";
import { SortObject } from "@/@types/SortObjectType";

interface FilterOptionsProps {
	onFilter: () => void;
	onSort: (sort: SortObject) => void;
}

export function FilterOptions({ onFilter, onSort }: FilterOptionsProps) {
	return (
		<div className="flex items-center justify-between w-full gap-2 xs:w-fit">
			<ButtonIcon icon={<Filter />} onClick={onFilter} />
			<SortDropdown onSort={onSort} />
		</div>
	);
}
