import { twMerge } from "tailwind-merge";

interface ButtonIconProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	icon: React.ReactNode;
}

export function ButtonIcon({ className, icon, ...props }: ButtonIconProps) {
	return (
		<button
			{...props}
			className={twMerge(
				"border p-2 rounded-lg disabled:bg-opacity-80 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 ease-in-out",
				className
			)}
		>
			{icon}
		</button>
	);
}
