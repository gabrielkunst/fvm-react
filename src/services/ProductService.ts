import { ProductType, ProductTypeFromFirestore } from "@/@types/ProductType";
import { firestore } from "@/config/firebase";
import { Product } from "@/models/Product";
import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	setDoc,
	updateDoc,
} from "firebase/firestore";

async function getAllProducts(): Promise<Product[]> {
	const collectionRef = collection(firestore, "products");

	const productsSnapshot = await getDocs(collectionRef);

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
	productData: Partial<ProductType>
): Promise<void> {
	const { id, ...restProductData } = productData;

	const collectionRef = collection(firestore, "products");
	const docRef = doc(collectionRef, id);

	await setDoc(docRef, restProductData);
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

export const ProductService = {
	getAllProducts,
	updateProductDoc,
	createProductDoc,
	deleteProductDoc,
	getProductDoc,
};
