import { XIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ModalBaseProps {
	children: React.ReactNode;
	onClose: () => void;
	className?: string;
}

export function Modal({ children, onClose, className }: ModalBaseProps) {
	const handleOutsideClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div
			className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black bg-opacity-70"
			onClick={handleOutsideClick}
		>
			<div
				className={twMerge(
					"p-4 w-[90vw] rounded-lg bg-custom-white max-w-[90vw] max-h-[90svh] relative",
					className
				)}
			>
				<button
					className="absolute p-2 bg-white border rounded-full shadow-md -top-4 -right-4"
					onClick={onClose}
				>
					<XIcon />
				</button>
				{children}
			</div>
		</div>
	);
}
