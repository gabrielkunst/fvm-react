import { Link } from "react-router-dom";

interface PopularProductCardProps {
	label: string;
	image: string;
}

export function PopularProductCard({ label, image }: PopularProductCardProps) {
	return (
		<Link
			to="/products"
			className="flex flex-col items-center justify-center overflow-hidden text-center transition-all duration-300 ease-in-out rounded-lg bg-neutral-100 hover:scale-105"
		>
			<img src={image} alt={label} />
			<div className="flex items-center justify-center p-4">
				<h3>{label}</h3>
			</div>
		</Link>
	);
}
