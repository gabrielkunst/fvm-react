import { Modal } from "@/components/Modal";
import { createContext, useEffect, useState } from "react";

interface ModalProps {
	content: React.ReactNode;
	className?: string;
}

interface ModalContextProps {
	openModal: ({ content }: ModalProps) => void;
	closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
	openModal: () => {},
	closeModal: () => {},
});

interface ModalContextProviderProps {
	children: React.ReactNode;
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
	const [modal, setModal] = useState<ModalProps | null>(null);

	const openModal = ({ content, className }: ModalProps) => {
		setModal({
			content,
			className,
		});
	};

	const closeModal = () => {
		setModal(null);
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				closeModal();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<ModalContext.Provider
			value={{
				closeModal,
				openModal,
			}}
		>
			{modal && (
				<Modal className={modal.className} onClose={closeModal}>
					{modal.content}
				</Modal>
			)}
			{children}
		</ModalContext.Provider>
	);
}
