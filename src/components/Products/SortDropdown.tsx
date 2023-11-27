import { useEffect, useRef, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { SortObject } from "@/@types/SortObjectType";

interface SortOptions {
	label: string;
	value: SortObject;
}

const SORT_OPTIONS: SortOptions[] = [
	{
		label: "Preço - Cres",
		value: {
			sortBy: "priceInCents",
			sortDirection: "asc",
		},
	},
	{
		label: "Preço - Dec",
		value: {
			sortBy: "priceInCents",
			sortDirection: "desc",
		},
	},
];

interface SortDropdownProps {
	onSort: (sortObject: SortObject) => void;
}

export function SortDropdown({ onSort }: SortDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement | null>(null);
	const dropdownButtonRef = useRef<HTMLButtonElement | null>(null);

	const onDropdownButtonClick = () => {
		setIsDropdownOpen((prevState) => !prevState);
	};

	const onOutsideClick = (e: React.FocusEvent<HTMLDivElement, Element>) => {
		const containsElement = e.target.contains(e.relatedTarget as Element);

		if (containsElement || e.relatedTarget === dropdownButtonRef.current) {
			return;
		}

		setIsDropdownOpen(false);
	};

	useEffect(() => {
		if (isDropdownOpen) {
			dropdownRef.current?.focus();
		}
	}, [isDropdownOpen]);

	return (
		<div className="relative">
			<button
				ref={dropdownButtonRef}
				onClick={onDropdownButtonClick}
				className="flex items-center justify-center gap-3 p-2 transition-all duration-300 border rounded-lg hover:opacity-80"
			>
				Ordenar por <ArrowUpDown />
			</button>
			{isDropdownOpen && (
				<div
					tabIndex={0}
					onBlur={onOutsideClick}
					ref={dropdownRef}
					className="absolute mt-1 flex flex-col ite bg-white border overflow-hidden rounded-lg z-[99] w-full"
				>
					{SORT_OPTIONS.map(({ label, value }) => (
						<button
							className="flex items-center justify-center gap-2 p-2 transition-all duration-200 hover:bg-gray-200"
							onClick={() => {
								onSort(value);
								setIsDropdownOpen(false);
							}}
						>
							{label}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
