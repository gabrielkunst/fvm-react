export interface ProductTypeFromFirestore {
	name: string;
	description: string;
	priceInCents: number;
	createdAt: Date;
	image: string;
	owner: string;
}

export interface ProductType extends ProductTypeFromFirestore {
	id: string;
}
