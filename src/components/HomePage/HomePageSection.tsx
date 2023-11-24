import { twMerge } from "tailwind-merge";

interface HomePageSectionProps {
	className?: string;
	children: React.ReactNode;
}

export function HomePageSection({ children, className }: HomePageSectionProps) {
	return (
		<section
			className={twMerge(
				"p-4 py-8 sm:px-10 md:px-16 lg:px-24 w-full relative",
				className
			)}
		>
			{children}
		</section>
	);
}
