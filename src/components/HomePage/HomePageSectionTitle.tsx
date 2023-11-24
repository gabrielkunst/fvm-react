interface HomePageTitleProps {
	children: React.ReactNode;
}

export function HomePageTitle({ children }: HomePageTitleProps) {
	return (
		<h3 className="my-4 text-3xl font-semibold text-center sm:mb-6 sm:mt-0">
			{children}
		</h3>
	);
}
