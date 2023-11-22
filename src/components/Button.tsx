import { twMerge } from "tailwind-merge";

const variations = {
	type: {
		primary: "bg-primary text-custom-white hover:bg-secondary",
		outlined:
			"border border-neutral-300 text-neutral-300 hover:bg-secondary hover:text-custom-white hover:border-transparent",
	},
	sizes: {
		sm: "text-sm",
		md: "text-base",
	},
	rounded: {
		lg: "rounded-lg",
		full: "rounded-full",
	},
};

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	type?: keyof typeof variations.type;
	size?: keyof typeof variations.sizes;
	rounded?: keyof typeof variations.rounded;
}

export function Button({
	children,
	type = "primary",
	size = "md",
	rounded = "lg",
	className,
	...props
}: ButtonProps) {
	const typeClass = variations.type[type];
	const sizeClass = variations.sizes[size];
	const roundedClass = variations.rounded[rounded];

	return (
		<button
			{...props}
			className={twMerge(
				"transition-all duration-300 ease-in-out px-4 py-3 w-fit",
				typeClass,
				sizeClass,
				roundedClass,
				className
			)}
		>
			{children}
		</button>
	);
}
