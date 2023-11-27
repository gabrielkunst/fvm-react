import { twMerge } from "tailwind-merge";

interface PageTitleProps {
	children: React.ReactNode;
	className?: string;
}

export function PageTitle({ children, className }: PageTitleProps) {
	return (
		<h1
			className={twMerge("text-2xl font-semibold sm:text-3xl", className)}
		>
			{children}
		</h1>
	);
}
