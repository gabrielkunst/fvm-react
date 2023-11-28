import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { variations } from "@/styles/shared/ButtonLinkVariations";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variation?: keyof typeof variations.variation;
	size?: keyof typeof variations.sizes;
	rounded?: keyof typeof variations.rounded;
	isLoading?: boolean;
	icon?: React.ReactNode;
	disabled?: boolean;
	reverse?: boolean;
}

export function Button({
	children,
	variation = "primary",
	size = "md",
	rounded = "lg",
	className,
	isLoading = false,
	disabled = false,
	reverse = false,
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
				"transition-all duration-300 ease-in-out w-fit flex justify-center gap-2 items-center disabled:bg-opacity-70 disabled:cursor-not-allowed",
				reverse ? "flex-row-reverse" : "flex-row",
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
