import { FilterOptions } from "../Products/FilterOptions";
import { ProductCardSkeleton } from "../Products/ProductCardSkeleton";
import { ProductCard } from "../Products/ProductCard";
import { User } from "@/models/User";
import { useUserProducts } from "./hooks/useUserProducts";
import { EmptyList } from "../EmptyList";

interface UserProductsProps {
	user: User;
}

export function UserProducts({ user }: UserProductsProps) {
	const { isFetching, products, setSort } = useUserProducts({ user });

	return (
		<section className="flex flex-col flex-1 gap-4 p-2 border rounded-lg">
			<div className="flex flex-wrap items-center justify-between gap-2">
				<h4 className="text-2xl font-semibold">Anúncios</h4>
				<FilterOptions setSort={setSort} />
			</div>
			<div
				className={
					!isFetching && products.length === 0
						? "flex-1 flex justify-center items-center"
						: "grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6"
				}
			>
				{isFetching &&
					Array.from({ length: 4 }).map((_, index) => (
						<ProductCardSkeleton key={index} />
					))}

				{!isFetching &&
					products.length !== 0 &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}

				{!isFetching && products.length === 0 && <EmptyList />}
			</div>
		</section>
	);
}
