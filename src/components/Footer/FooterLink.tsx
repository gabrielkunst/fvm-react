import { Link } from "react-router-dom";

interface FooterLinkProps {
	label: string;
	href: string;
}

export function FooterLink({ label, href }: FooterLinkProps) {
	return (
		<li>
			<Link
				className="transition-all duration-300 ease-in-out hover:text-secondary"
				to={href}
			>
				{label}
			</Link>
		</li>
	);
}
