import { ProductType } from "@/@types/ProductType";

export class Product implements ProductType {
	id: string;
	name: string;
	description: string;
	priceInCents: number;
	createdAt: Date;
	image: string;
	owner: string;

	constructor({
		id,
		name,
		description,
		priceInCents,
		createdAt,
		owner,
		image,
	}: ProductType) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.priceInCents = priceInCents;
		this.createdAt = createdAt;
		this.image = image;
		this.owner = owner;
	}

	get formattedPrice() {
		const price = this.priceInCents / 100;
		return new Intl.NumberFormat("pt-BR", {
			style: "currency",
			currency: "BRL",
		}).format(price);
	}

	get priceInReals() {
		const formattedPrice = this.priceInCents / 100;
		return formattedPrice;
	}
}
