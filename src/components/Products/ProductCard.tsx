import { Product } from "@/models/Product";
import FallbackImage from "@/assets/fallbackImage.png";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
	product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
	const [onImageError, setOnImageError] = useState<boolean>(false);

	return (
		<Link
			to={product.id}
			className="flex flex-col overflow-hidden border rounded-lg w-full h-[230px] hover:scale-105 transition-all  animate-fade-in duration-300 ease-in-out cursor-pointer"
		>
			<div className="h-[150px] overflow-hidden bg-custom-gray">
				<img
					src={onImageError ? FallbackImage : product.image}
					className={`object-cover  w-full  ${
						onImageError && "h-full object-center"
					}`}
					alt={`Foto do produto ${product.name}`}
					onError={() => setOnImageError(true)}
				/>
			</div>
			<div className="flex flex-col flex-1 gap-2 p-2">
				<h2 className="flex-1 text-lg font-medium truncate text-ellipsis">
					{product.name}
				</h2>
				<div className="flex items-center justify-between ">
					<span className="font-medium">
						{product.formattedPrice}
					</span>
					<span className="font-medium">12km</span>
				</div>
			</div>
		</Link>
	);
}
