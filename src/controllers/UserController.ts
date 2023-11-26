import { UserType } from "@/@types/UserType";
import { firestore } from "@/config/firebase";
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
	try {
		const collectionRef = collection(firestore, "users");
		const docRef = doc(collectionRef, userId);

		const docSnap = await getDoc(docRef);

		if (!docSnap.exists()) {
			throw new Error("Document not found");
		}

		return {
			...(docSnap.data() as UserType),
			id: docSnap.id,
		};
	} catch (error) {
		console.error(error);
	}
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
