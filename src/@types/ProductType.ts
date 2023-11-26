export interface ProductType {
	id: string;
	name: string;
	description: string;
	priceInCents: string;
	createdAt: Date;
	image: string;
	owner: string;
}

export interface ProductFirestoreType {
	name: string;
	description: string;
	priceInCents: string;
	createdAt: Date;
	image: string;
	owner: string;
}
