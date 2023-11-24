import { Link } from "react-router-dom";

interface HomePageCategoryCardProps {
	label: string;
	image: string;
	value: string;
}

export function HomePageCategoryCard({
	label,
	image,
	value,
}: HomePageCategoryCardProps) {
	return (
		<Link
			className="flex flex-col items-center max-w-[350px]  justify-center w-full overflow-hidden text-center transition-all duration-300 ease-in-out rounded-lg bg-neutral-100 hover:scale-105"
			to={`products?category=${value}`}
		>
			<img
				src={image}
				className="object-cover w-full h-full max-h-[200px]"
				alt={label}
			/>
			<div className="flex items-center justify-center p-4">
				<h3>{label}</h3>
			</div>
		</Link>
	);
}
