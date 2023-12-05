/* import { UserType } from "@/@types/UserType";
import { firestore } from "@/config/firebase";
import { User } from "@/models/User";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

interface CreateUserDocParams {
	userId: string;
	email: string;
	name: string;
}

async function createUserDoc({ userId, email, name }: CreateUserDocParams) {
	try {
		const collectionRef = collection(firestore, `users`);
		const docRef = doc(collectionRef, userId);

		const docData = {
			name,
			email,
			createdAt: new Date(),
			ownProducts: [],
		};

		await setDoc(docRef, docData);

		return docData;
	} catch (error) {
		console.error(error);
	}
}

async function deleteUserDoc() {
	// not implemented yet
}

interface ReadUserDocParams {
	userId: string;
}

async function readUserDoc({ userId }: ReadUserDocParams) {
	const collectionRef = collection(firestore, "users");
	const docRef = doc(collectionRef, userId);

	const docSnap = await getDoc(docRef);

	if (!docSnap.exists()) {
		throw new Error("Document not found");
	}

	const { createdAt, ...userData } = docSnap.data();
	const formattedData = new Date(createdAt.seconds * 1000);

	const newUser = new User({
		...(userData as UserType),
		createdAt: formattedData,
		id: docSnap.id,
	});

	return newUser;
}

interface UpdateUserDocParams {
	userId: string;
	newDocData: Partial<UserType>;
}

async function updateUserDoc({ userId, newDocData }: UpdateUserDocParams) {
	try {
		const collectionRef = collection(firestore, "users");
		const docRef = doc(collectionRef, userId);

		await updateDoc(docRef, {
			...newDocData,
		});
	} catch (error) {
		console.error(error);
	}
}

export const UserController = {
	createUserDoc,
	deleteUserDoc,
	readUserDoc,
	updateUserDoc,
};
 */

import { UserType } from "@/@types/UserType";
import { User } from "@/models/User";
import { UserService } from "@/services/UserService";

async function createUserDoc(userData: UserType): Promise<void> {
	try {
		if (!userData) {
			throw new Error("User data not provided");
		}

		await UserService.createUserDoc(userData);
	} catch (error) {
		console.error(error);
	}
}

async function getUserDoc(userId: string): Promise<User | undefined> {
	try {
		if (!userId) {
			throw new Error("User ID was not provided");
		}

		const newUser = await UserService.getUserDoc(userId);

		return newUser;
	} catch (error) {
		console.error(error);
	}
}

async function updateUserDoc(
	userId: string,
	newUserData: Partial<UserType>
): Promise<void> {
	try {
		if (!userId) {
			throw new Error("User ID was not provided");
		}

		if (!newUserData) {
			throw new Error("New user data not provided");
		}

		await UserService.updateUserDoc(userId, newUserData);
	} catch (error) {
		console.error(error);
	}
}

async function deleteUserDoc(): Promise<void> {
	// not implemented yet
}

export const UserController = {
	createUserDoc,
	getUserDoc,
	updateUserDoc,
	deleteUserDoc,
};
