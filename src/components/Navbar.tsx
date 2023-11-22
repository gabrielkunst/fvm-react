import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { NavbarLink } from "./NavbarLink";
import { NavbarSearchForm } from "./NavbarSearchForm";

const NAVBAR_LINKS = [
	{ label: "Home", href: "/" },
	{ label: "Meus Anúncios", href: "/my-products" },
	{ label: "Produtos", href: "/products" },
];

export function Navbar() {
	return (
		<nav className="bg-custom-white flex items-center border-b border-neutral-200 justify-between overflow-hidden py-3 px-5 max-h-[80px] min-h-[80px] lg:gap-10">
			<div className="flex items-center justify-center gap-3">
				<Link to="/" className="w-[55px] h-full">
					<Logo />
				</Link>
				<NavbarSearchForm />
			</div>
			<div className="flex items-center justify-between gap-10 lg:flex-1 max-w-[600px]">
				<ul className="items-center flex-1 hidden gap-4 justify-evenly lg:flex lg:flex-1">
					{NAVBAR_LINKS.map(({ href, label }) => (
						<NavbarLink key={href} href={href} label={label} />
					))}
				</ul>
				<div className="flex items-center justify-center gap-2">
					<Button
						rounded="full"
						type="outlined"
						className="min-w-[120px]"
						size="sm"
					>
						Entrar
					</Button>
					<Button
						rounded="full"
						className="hidden sm:block min-w-[120px]"
						size="sm"
					>
						Anunciar
					</Button>
				</div>
			</div>
		</nav>
	);
}
