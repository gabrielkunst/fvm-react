import { Link } from "react-router-dom";

interface HomePageCategoryCardProps {
	label: string;
	image: string;
}

export function HomePageCategoryCard({
	label,
	image,
}: HomePageCategoryCardProps) {
	return (
		<Link
			className="transition-all duration-300 ease-in-out hover:scale-105"
			to="/products?category=gardening"
		>
			<img src={image} alt={label} />
			<div className="">
				<h3>{label}</h3>
			</div>
		</Link>
	);
}
