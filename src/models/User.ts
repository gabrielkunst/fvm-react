import { UserType } from "@/@types/UserType";

export class User implements UserType {
	id: string;
	name: string;
	email: string;
	createdAt: Date;
	ownProducts: string[];

	constructor({ id, name, email, createdAt, ownProducts }: UserType) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.createdAt = createdAt;
		this.ownProducts = ownProducts;
	}
}
