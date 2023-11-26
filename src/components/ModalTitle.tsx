interface ModalTitleProps {
	children: React.ReactNode;
}

export function ModalTitle({ children }: ModalTitleProps) {
	return <h2 className="mb-3 text-xl font-medium">{children}</h2>;
}
