import { SortObject } from "@/@types/SortObjectType";
import { DEFAULT_SORT } from "@/constants/defaultSort";
import { ProductController } from "@/controllers/ProductController";
import { Product } from "@/models/Product";
import { createContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router";

interface ProductsContextProviderProps {
	children: React.ReactNode;
}

interface ProductsContextProps {
	products: Product[];
	isLoading: boolean;
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	setCategories: React.Dispatch<React.SetStateAction<string[]>>;
	categories: string[];
	setSort: React.Dispatch<React.SetStateAction<SortObject>>;
	sort: SortObject;
}

export const ProductsContext = createContext<ProductsContextProps>({
	products: [],
	isLoading: false,
	query: "",
	setQuery: () => {},
	setSort: () => {},
	sort: DEFAULT_SORT,
	setCategories: () => {},
	categories: [],
});

export function ProductsContextProvider({
	children,
}: ProductsContextProviderProps) {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [sort, setSort] = useState<SortObject>(DEFAULT_SORT);
	const [categories, setCategories] = useState<string[]>([]);
	const [query, setQuery] = useState<string>("");
	const location = useLocation();

	const filteredProducts = useMemo(
		() =>
			products.filter((product) => {
				if (!query) {
					return true;
				}

				const productName = product.name.toLowerCase();
				const querySearch = query.toLowerCase();

				return productName.includes(querySearch);
			}),
		[products, query]
	);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setIsLoading(true);
				const products = await ProductController.getAllProducts(sort);

				if (!products) {
					throw new Error("Error setting products");
				}

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

	useEffect(() => {
		const { pathname } = location;

		if (pathname === "/products") {
			return;
		}

		setQuery("");
		setCategories([]);
		setSort(DEFAULT_SORT);
	}, [location]);

	return (
		<ProductsContext.Provider
			value={{
				query,
				setQuery,
				products: filteredProducts,
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
