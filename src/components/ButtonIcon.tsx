import { twMerge } from "tailwind-merge";

interface ButtonIconProps {
	className?: string;
	icon: React.ReactNode;
}

export function ButtonIcon({ className, icon }: ButtonIconProps) {
	return (
		<button
			className={twMerge(
				"border p-2 rounded-lg disabled:bg-opacity-70 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 ease-in-out",
				className
			)}
		>
			{icon}
		</button>
	);
}
