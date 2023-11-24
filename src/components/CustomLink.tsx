import { Link } from "react-router-dom";
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

interface CustomLinkProps {
	type?: keyof typeof variations.type;
	size?: keyof typeof variations.sizes;
	rounded?: keyof typeof variations.rounded;
	href: string;
	className?: string;
	children: React.ReactNode;
}

export function CustomLink({
	children,
	type = "primary",
	size = "md",
	rounded = "lg",
	className,
	href,
}: CustomLinkProps) {
	const typeClass = variations.type[type];
	const sizeClass = variations.sizes[size];
	const roundedClass = variations.rounded[rounded];

	return (
		<Link
			to={href}
			className={twMerge(
				"transition-all block duration-300 ease-in-out px-4 py-3 w-fit",
				typeClass,
				sizeClass,
				roundedClass,
				className
			)}
		>
			{children}
		</Link>
	);
}
