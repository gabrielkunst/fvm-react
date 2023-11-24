import { twMerge } from "tailwind-merge";

interface HomePageSectionProps {
	className?: string;
	children: React.ReactNode;
	noPadding?: boolean;
}

export function HomePageSection({
	children,
	className,
	noPadding = false,
}: HomePageSectionProps) {
	return (
		<section
			className={twMerge(
				" w-full relative",
				!noPadding && "p-4 py-8 sm:px-10 md:px-16 lg:px-24",
				className
			)}
		>
			{children}
		</section>
	);
}
