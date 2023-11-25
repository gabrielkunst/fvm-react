interface InputErrorMessageProps {
	children: React.ReactNode;
}

export function InputErrorMessage({ children }: InputErrorMessageProps) {
	return <p className="pl-2 mt-1 text-sm text-red-500">{children}</p>;
}
