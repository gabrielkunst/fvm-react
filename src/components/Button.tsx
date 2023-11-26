import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

const variations = {
	variation: {
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

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variation?: keyof typeof variations.variation;
	size?: keyof typeof variations.sizes;
	rounded?: keyof typeof variations.rounded;
	isLoading?: boolean;
	icon?: React.ReactNode;
	disabled?: boolean;
}

export function Button({
	children,
	variation = "primary",
	size = "md",
	rounded = "lg",
	className,
	isLoading = false,
	disabled = false,
	icon,
	...props
}: ButtonProps) {
	const typeClass = variations.variation[variation];
	const sizeClass = variations.sizes[size];
	const roundedClass = variations.rounded[rounded];

	return (
		<button
			{...props}
			disabled={isLoading || disabled}
			className={twMerge(
				"transition-all duration-300 ease-in-out px-4 py-3 w-fit flex justify-center gap-2 items-center disabled:bg-opacity-70 disabled:cursor-not-allowed",
				typeClass,
				sizeClass,
				roundedClass,
				className
			)}
		>
			{isLoading ? <Loader2 size={18} className="animate-spin" /> : icon}
			{children}
		</button>
	);
}
