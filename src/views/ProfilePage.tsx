import { SortObject } from "@/@types/SortObjectType";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { PageTitle } from "@/components/PageTitle";
import { FilterOptions } from "@/components/Products/FilterOptions";
import { ProductCard } from "@/components/Products/ProductCard";
import { ProductCardSkeleton } from "@/components/Products/ProductCardSkeleton";

import { useAuth } from "@/hooks/useAuth";
import { Product } from "@/models/Product";
// import { User } from "@/models/User";
import { useEffect, useState } from "react";

export function ProfilePage() {
	// const [user, setUser] = useState<User | null>(null);
	const { user } = useAuth();
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchUser = async () => {
			setTimeout(() => {
				setIsLoading(false);
				// just to avoid error on deploy
				// cause variable was not being used
				setProducts([]);
			}, 1000);
		};

		fetchUser();
	}, []);

	const setSort = (sort: SortObject) => {
		// just to avoid error on deploy
		// cause variable was not being used
		console.log(sort);
	};
	const onFilterButtonClick = () => {};

	return (
		<div className="flex-1 flex flex-col p-5 sm:p-10 md:p-12 min-h-[calc(100svh-80px)] md:min-h-0">
			<PageTitle className="mb-2">Contato</PageTitle>
			<main
				className={`flex flex-1 ${
					isLoading && "items-center justify-center"
				}`}
			>
				{isLoading && <LoadingSpinner />}
				{!isLoading && user && (
					<div className="flex flex-col flex-1 gap-2 animate-fade-in">
						<aside className="flex flex-col gap-2 p-2 border rounded-lg">
							<h3 className="text-lg font-semibold">
								{user.name}
							</h3>
							<p>(45) 991231282</p>
							<p>Membro desde {user.memberSince}</p>
						</aside>
						<section className="flex flex-col flex-1 gap-4 p-2 border rounded-lg">
							<div className="flex flex-wrap items-center justify-between gap-2">
								<h4 className="text-lg font-semibold">
									Anúncios
								</h4>
								<FilterOptions
									onFilter={onFilterButtonClick}
									onSort={setSort}
								/>
							</div>
							<div
								className={
									!isLoading && products.length === 0
										? "flex-1 flex justify-center items-center"
										: "grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6"
								}
							>
								{isLoading &&
									Array.from({ length: 10 }).map((_, i) => (
										<ProductCardSkeleton key={i} />
									))}
								{!isLoading &&
									products.length !== 0 &&
									products.map((product) => (
										<ProductCard
											key={product.id}
											product={product}
										/>
									))}
								{!isLoading && products.length === 0 && (
									<div className="flex flex-col items-center justify-center w-full h-full gap-4 text-center animate-fade-in">
										<h2 className="text-2xl font-medium">
											Nenhum produto encontrado
										</h2>
										<p>
											Tente mudar o filtro ou espere até
											que algum produto seja adicionado
										</p>
									</div>
								)}
							</div>
						</section>
					</div>
				)}
			</main>
		</div>
	);
}
