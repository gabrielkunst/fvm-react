import { ProductFirestoreType, ProductType } from "@/@types/ProductType";
import { SortObject } from "@/@types/SortObjectType";
import { firestore } from "@/config/firebase";
import { Product } from "@/models/Product";
import {
	DocumentData,
	Query,
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	where,
} from "firebase/firestore";

interface FetchProducstParams {
	categories?: string[];
	sort?: SortObject;
}

async function fetchProducts({
	categories,
	sort = { sortBy: "priceInCents", sortDirection: "asc" },
}: FetchProducstParams): Promise<Product[]> {
	try {
		const collectionRef = collection(firestore, "products");

		let queryRef: Query<DocumentData> = query(collectionRef);

		if (categories && categories.length > 0) {
			queryRef = query(queryRef, where("category", "in", categories));
		}

		queryRef = query(queryRef, orderBy(sort.sortBy, sort.sortDirection));

		const querySnapshot = await getDocs(queryRef);

		const products: Product[] = querySnapshot.docs.map((doc) => {
			const productData = doc.data() as ProductFirestoreType;

			return new Product({
				id: doc.id,
				...productData,
			});
		});

		return products;
	} catch (error) {
		console.error(error);
		return [];
	}
}

interface CreateProductDocParams {
	userId: string;
	data: Partial<ProductType>;
}

async function createProductDoc({ userId, data }: CreateProductDocParams) {
	try {
		const collectionRef = collection(firestore, "products");

		const productData = {
			...data,
			owner: userId,
			createdAt: new Date(),
		};

		const createdProduct = await addDoc(collectionRef, productData);

		return createdProduct;
	} catch (error) {
		console.error(error);
	}
}

async function updateProductDoc() {}

async function deleteProductDoc() {}

async function readProductDoc(id: string) {
	const collectionRef = collection(firestore, "products");
	const docRef = doc(collectionRef, id);

	const docSnapshot = await getDoc(docRef);

	if (!docSnapshot.exists()) {
		throw new Error("Product not found");
	}

	const productData = docSnapshot.data() as ProductFirestoreType;

	const product = new Product({
		id: docSnapshot.id,
		...productData,
	});

	return product;
}

interface FetchListedProductsParams {
	products: string[];
}

interface FetchListedProductsParams {
	products: string[];
}

async function fetchListedProducts({ products }: FetchListedProductsParams) {
	const collectionRef = collection(firestore, "products");

	const productsData: Product[] = [];

	for (const productId of products) {
		const docRef = doc(collectionRef, productId);
		const docSnapshot = await getDoc(docRef);

		if (docSnapshot.exists()) {
			const { createdAt, ...productData } = docSnapshot.data();
			const formattedCreatedAt = new Date(createdAt.seconds * 1000);

			productsData.push(
				new Product({
					...(productData as ProductType),
					id: docSnapshot.id,
					createdAt: formattedCreatedAt,
				})
			);
		} else {
			console.error(`Document with ID ${productId} not found.`);
		}
	}

	return productsData;
}

export const ProductController = {
	fetchProducts,
	createProductDoc,
	updateProductDoc,
	deleteProductDoc,
	readProductDoc,
	fetchListedProducts,
};
