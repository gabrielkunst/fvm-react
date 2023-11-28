import { SortObject } from "@/@types/SortObjectType";
import { ProductController } from "@/controllers/ProductController";
import { Product } from "@/models/Product";
import { User } from "@/models/User";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

interface useUserProductsProps {
	user: User;
}

export function useUserProducts({ user }: useUserProductsProps) {
	const [isFetching, setIsFetching] = useState(false);
	const [products, setProducts] = useState<Product[]>([]);
	const [sort, setSort] = useState<SortObject>();

	const sortedProducts = useMemo(() => {
		if (!sort) {
			return products;
		}

		return products.sort((a, b) => {
			if (sort.sortDirection === "asc") {
				return a[sort.sortBy] - b[sort.sortBy];
			}

			return b[sort.sortBy] - a[sort.sortBy];
		});
	}, [sort, products]);

	useEffect(() => {
		const fetchUserProducts = async () => {
			try {
				setIsFetching(true);

				const products = await ProductController.fetchListedProducts({
					products: user.ownProducts,
				});

				setProducts(products);
			} catch (error) {
				console.error(error);
				toast.error("Não foi possível carregar os produtos");
			} finally {
				setIsFetching(false);
			}
		};

		fetchUserProducts();
	}, []);

	return {
		isFetching,
		products: sortedProducts,
		setSort,
	};
}
