import { UserType, UserTypeFromFirebase } from "@/@types/UserType";
import { firestore } from "@/config/firebase";
import { User } from "@/models/User";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

async function getUserDoc(userId: string): Promise<User> {
	const collectionRef = collection(firestore, "users");
	const docRef = doc(collectionRef, userId);

	const docData = await getDoc(docRef);

	if (!docData.exists()) {
		throw new Error("User doc not found");
	}

	const userData = docData.data() as UserTypeFromFirebase;

	return new User({
		id: docData.id,
		...userData,
	});
}

async function createUserDoc(userData: UserType): Promise<void> {
	const { id, ...restUserData } = userData;

	const collectionRef = collection(firestore, "users");
	const docRef = doc(collectionRef, id);

	await setDoc(docRef, restUserData);
}

async function updateUserDoc(
	userId: string,
	newUserData: Partial<UserType>
): Promise<void> {
	const collectionRef = collection(firestore, "users");
	const docRef = doc(collectionRef, userId);

	await updateDoc(docRef, newUserData);
}

async function deleteUserDoc(): Promise<void> {
	// need to delete user doc
	// need to delete every product owned by the user
	// remove this products from each user's favorite products collection
}

export const UserService = {
	getUserDoc,
	createUserDoc,
	updateUserDoc,
	deleteUserDoc,
};
