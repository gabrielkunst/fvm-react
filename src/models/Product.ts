import { ProductType } from "@/@types/ProductType";

export class Product implements ProductType {
	id: string;
	name: string;
	description: string;
	price: string;
	createdAt: Date;
	image: string;
	owner: string;

	constructor({
		id,
		name,
		description,
		price,
		createdAt,
		owner,
		image,
	}: ProductType) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.createdAt = createdAt;
		this.image = image;
		this.owner = owner;
	}
}
