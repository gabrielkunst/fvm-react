export interface UserTypeFromFirebase {
	name: string;
	email: string;
	createdAt: Date;
	ownProducts: string[];
}

export interface UserType extends UserTypeFromFirebase {
	id: string;
}
