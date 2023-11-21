export function Footer() {
	return (
		<footer className="flex flex-wrap items-center justify-around px-4 py-8 text-center border-t border-neutral-200">
			<div className="min-w-[200px] w-full md:w-auto">
				<h3 className="mt-3 mb-2 text-lg font-medium text-black-custom">
					Categorias
				</h3>
				<ul className="grid items-center justify-center grid-cols-2 gap-x-8 gap-y-2 max-w-[300px] mx-auto">
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/products?category=gardening"
						>
							Jardinagem
						</a>
					</li>
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/products?category=construction"
						>
							Construção
						</a>
					</li>
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/products?category=cleaning"
						>
							Limpeza
						</a>
					</li>
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/products?category=electrical"
						>
							Elétrica
						</a>
					</li>
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/products?category=painting"
						>
							Pintura
						</a>
					</li>
				</ul>
			</div>
			<div className="min-w-[200px]">
				<h3 className="mt-3 mb-2 text-lg font-medium text-black-custom">
					Links
				</h3>
				<ul className="flex flex-col gap-2">
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/"
						>
							Home
						</a>
					</li>
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/register"
						>
							Registro
						</a>
					</li>
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/products"
						>
							Produtos
						</a>
					</li>
				</ul>
			</div>
			<div className="min-w-[200px]">
				<h3 className="mt-3 mb-2 text-lg font-medium text-black-custom">
					Fale conosco
				</h3>
				<ul className="flex flex-col gap-2">
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/"
						>
							Whatsapp
						</a>
					</li>
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/"
						>
							Instagram
						</a>
					</li>
					<li>
						<a
							className="transition-all duration-300 ease-in-out hover:text-secondary pageLink"
							href="/"
						>
							Email
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
