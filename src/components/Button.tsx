interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
	return <button {...props}>{children}</button>;
}
