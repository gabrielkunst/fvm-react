import { FooterLink } from "./FooterLink";

const FOOTER_LINKS_CATEGORIES = [
	{ label: "Jardinagem", href: "/products?category=gardening" },
	{ label: "Construção", href: "/products?category=construction" },
	{ label: "Limpeza", href: "/products?category=cleaning" },
	{ label: "Elétrica", href: "/products?category=electrical" },
	{ label: "Pintura", href: "/products?category=painting" },
];

const FOOTER_LINKS = [
	{ label: "Home", href: "/" },
	{ label: "Registro", href: "/signup" },
	{ label: "Produtos", href: "/products" },
];

const FOOTER_LINKS_SOCIAL = [
	{ label: "Instagram", href: "https://www.instagram.com/" },
	{ label: "Facebook", href: "https://www.facebook.com/" },
	{ label: "Twitter", href: "https://twitter.com/" },
];

export function Footer() {
	return (
		<footer className="flex flex-wrap items-center justify-around px-4 py-8 text-center border-t border-neutral-200">
			<div className="min-w-[200px] w-full md:w-auto">
				<h3 className="mt-3 mb-2 text-lg font-medium text-black-custom">
					Categorias
				</h3>
				<ul className="grid items-center justify-center grid-cols-2 gap-x-8 gap-y-2 max-w-[300px] mx-auto">
					{FOOTER_LINKS_CATEGORIES.map(({ href, label }) => (
						<FooterLink key={href} href={href} label={label} />
					))}
				</ul>
			</div>
			<div className="min-w-[200px]">
				<h3 className="mt-3 mb-2 text-lg font-medium text-black-custom">
					Links
				</h3>
				<ul className="flex flex-col gap-2">
					{FOOTER_LINKS.map(({ href, label }) => (
						<FooterLink key={href} href={href} label={label} />
					))}
				</ul>
			</div>
			<div className="min-w-[200px]">
				<h3 className="mt-3 mb-2 text-lg font-medium text-black-custom">
					Fale conosco
				</h3>
				<ul className="flex flex-col gap-2">
					{FOOTER_LINKS_SOCIAL.map(({ href, label }) => (
						<FooterLink key={href} href={href} label={label} />
					))}
				</ul>
			</div>
		</footer>
	);
}
