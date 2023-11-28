import { variations } from "@/styles/shared/ButtonLinkVariations";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface CustomLinkProps {
	variation?: keyof typeof variations.variation;
	size?: keyof typeof variations.sizes;
	rounded?: keyof typeof variations.rounded;
	href: string;
	className?: string;
	children: React.ReactNode;
}

export function CustomLink({
	children,
	variation = "primary",
	size = "md",
	rounded = "lg",
	className,
	href,
}: CustomLinkProps) {
	const typeClass = variations.variation[variation];
	const sizeClass = variations.sizes[size];
	const roundedClass = variations.rounded[rounded];

	return (
		<Link
			to={href}
			className={twMerge(
				"transition-all block duration-300 ease-in-out w-fit",
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
