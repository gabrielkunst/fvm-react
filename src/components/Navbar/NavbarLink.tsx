import { Link } from "react-router-dom";

interface NavbarLinkProps {
	href: string;
	label: string;
}

export function NavbarLink({ href, label }: NavbarLinkProps) {
	return (
		<li>
			<Link
				to={href}
				className="transition-all duration-300 ease-in-out text-neutral-300 hover:text-secondary"
			>
				{label}
			</Link>
		</li>
	);
}
