import { ProductType } from "@/@types/ProductType";
import { SortObject } from "@/@types/SortObjectType";
import { Product } from "@/models/Product";
import { ProductService } from "@/services/ProductService";

async function getAllProducts(
	sort: SortObject
): Promise<Product[] | undefined> {
	try {
		const productsData = await ProductService.getAllProducts(sort);

		return productsData;
	} catch (error) {
		console.error(error);
	}
}

async function createProductDoc(
	productData: ProductType
): Promise<ProductType | undefined> {
	try {
		if (!productData) {
			throw new Error("No product data provided");
		}

		const createdProduct = await ProductService.createProductDoc(
			productData
		);
		return createdProduct;
	} catch (error) {
		console.error(error);
	}
}

async function getProductDoc(productId: string): Promise<Product | undefined> {
	try {
		if (!productId) {
			throw new Error("Product ID was not provided");
		}

		const product = ProductService.getProductDoc(productId);

		return product;
	} catch (error) {
		console.error(error);
	}
}

async function updateProductDoc(
	productId: string,
	newProductData: Partial<ProductType>
): Promise<void> {
	try {
		if (!productId) {
			throw new Error("Product ID was not provided");
		}

		if (!newProductData) {
			throw new Error("New product data was not provided");
		}

		await ProductService.updateProductDoc(productId, newProductData);
	} catch (error) {
		console.error(error);
	}
}

async function deleteProductDoc(productId: string): Promise<void> {
	try {
		if (!productId) {
			throw new Error("Product ID was not provided");
		}

		await ProductService.deleteProductDoc(productId);
	} catch (error) {
		console.error(error);
	}
}

async function getListedProducts(
	productsId: string[]
): Promise<Product[] | undefined> {
	try {
		const products = await ProductService.getListedProducts(productsId);

		return products;
	} catch (error) {
		console.error(error);
	}
}

export const ProductController = {
	getAllProducts,
	createProductDoc,
	getProductDoc,
	updateProductDoc,
	deleteProductDoc,
	getListedProducts,
};
