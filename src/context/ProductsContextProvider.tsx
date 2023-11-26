import { SortObject } from "@/@types/SortObjectType";
import { ProductController } from "@/controllers/ProductController";
import { Product } from "@/models/Product";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ProductsContextProviderProps {
	children: React.ReactNode;
}

interface ProductsContextProps {
	products: Product[];
	isLoading: boolean;
	setCategories: React.Dispatch<React.SetStateAction<string[]>>;
	categories: string[];
	setSort: React.Dispatch<React.SetStateAction<SortObject | undefined>>;
	sort: SortObject | undefined;
}

export const ProductsContext = createContext<ProductsContextProps>({
	products: [],
	isLoading: false,
	setSort: () => {},
	sort: undefined,
	setCategories: () => {},
	categories: [],
});

export function ProductsContextProvider({
	children,
}: ProductsContextProviderProps) {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [sort, setSort] = useState<SortObject>();
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setIsLoading(true);
				const products = await ProductController.fetchProducts({
					sort,
					categories,
				});
				setProducts(products);
			} catch (error) {
				console.error(error);
				toast.error("Erro ao carregar produtos");
			} finally {
				setIsLoading(false);
			}
		};

		fetchProducts();
	}, [categories, sort]);

	return (
		<ProductsContext.Provider
			value={{
				products,
				isLoading,
				setSort,
				sort,
				setCategories,
				categories,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
}
