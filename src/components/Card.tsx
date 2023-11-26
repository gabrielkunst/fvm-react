import { twMerge } from "tailwind-merge";

interface CardProps {
	children: React.ReactNode;
	className?: string;
}

export function Card({ children, className }: CardProps) {
	return (
		<div
			className={twMerge("p-4 bg-white rounded-lg shadow-sm", className)}
		>
			{children}
		</div>
	);
}
