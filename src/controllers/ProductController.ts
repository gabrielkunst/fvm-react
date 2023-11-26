import { ProductType } from "@/@types/ProductType";
import { firestore } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";

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
		};

		const createdProduct = await addDoc(collectionRef, productData);

		return createdProduct;
	} catch (error) {
		console.error(error);
	}
}

async function updateProductDoc() {}

async function deleteProductDoc() {}

async function readProductDoc() {}

export const ProductController = {
	createProductDoc,
	updateProductDoc,
	deleteProductDoc,
	readProductDoc,
};
