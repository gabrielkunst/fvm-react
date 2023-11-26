import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export function ProductsList() {
	const { isLoading, products } = useProducts();

	console.log(products);

	return (
		<div
			className={
				!isLoading && products.length === 0
					? "flex-1 flex justify-center items-center"
					: "grid grid-cols-1 gap-4 mt-4 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6"
			}
		>
			{isLoading &&
				Array.from({ length: 10 }).map((_, i) => (
					<ProductCardSkeleton key={i} />
				))}
			{!isLoading &&
				products.length !== 0 &&
				products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			{!isLoading && products.length === 0 && (
				<div className="flex flex-col items-center justify-center w-full h-full gap-4 text-center animate-fade-in">
					<h2 className="text-2xl font-medium">
						Nenhum produto encontrado
					</h2>
					<p>Tente mudar o filtro ou adicione um novo produto</p>
				</div>
			)}
		</div>
	);
}
