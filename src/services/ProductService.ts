import { ProductType, ProductTypeFromFirestore } from "@/@types/ProductType";
import { SortObject } from "@/@types/SortObjectType";
import { firestore } from "@/config/firebase";
import { Product } from "@/models/Product";
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	updateDoc,
} from "firebase/firestore";

async function getAllProducts(sort: SortObject): Promise<Product[]> {
	const collectionRef = collection(firestore, "products");

	let customQuery = query(collectionRef);

	if (sort) {
		customQuery = query(
			customQuery,
			orderBy(sort.sortBy, sort.sortDirection)
		);
	}

	const productsSnapshot = await getDocs(customQuery);

	const products = productsSnapshot.docs.map((doc) => {
		const productData = doc.data() as ProductTypeFromFirestore;
		return new Product({
			id: doc.id,
			...productData,
		});
	});

	return products;
}

async function updateProductDoc(
	productId: string,
	newProductData: Partial<ProductType>
): Promise<void> {
	const collectionRef = collection(firestore, "products");
	const docRef = doc(collectionRef, productId);

	await updateDoc(docRef, newProductData);
}

async function createProductDoc(
	productData: ProductType
): Promise<ProductType> {
	const { id, ...restProductData } = productData;

	const collectionRef = collection(firestore, "products");

	const createdProduct = await addDoc(collectionRef, restProductData);

	return {
		id: createdProduct.id,
		...restProductData,
	};
}

async function deleteProductDoc(productId: string): Promise<void> {
	const collectionRef = collection(firestore, "products");
	const docRef = doc(collectionRef, productId);

	await deleteDoc(docRef);
}

async function getProductDoc(productId: string): Promise<Product> {
	const collectionRef = collection(firestore, "products");
	const docRef = doc(collectionRef, productId);

	const productSnapshot = await getDoc(docRef);

	if (!productSnapshot.exists()) {
		throw new Error("Product doc not found");
	}

	const productData = productSnapshot.data() as ProductTypeFromFirestore;

	return new Product({
		id: productSnapshot.id,
		...productData,
	});
}

async function getListedProducts(products: string[]): Promise<Product[]> {
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

export const ProductService = {
	getAllProducts,
	updateProductDoc,
	createProductDoc,
	deleteProductDoc,
	getProductDoc,
	getListedProducts,
};
