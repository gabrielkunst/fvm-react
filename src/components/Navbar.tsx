import { Logo } from "./Logo";

export function Navbar() {
	return (
		<nav className="bg-white-custom flex items-center border-b border-neutral-200 justify-between overflow-hidden py-3 px-5 max-h-[80px] min-h-[80px] lg:gap-10">
			<div className="flex items-center justify-center gap-3">
				<a href="/" className="w-[55px] h-full pageLink">
					<Logo />
				</a>
				<form
					id="navbarSearchForm"
					className="p-2 rounded-lg items-center justify-center gap-2 min-w-[300px] bg-neutral-200 hidden md:flex"
				>
					<input
						type="text"
						name="searchQuery"
						placeholder="Buscar ferramentas"
						className="flex-1 text-sm text-black-custom placeholder:text-text-gray"
					/>
					<button type="submit" className="text-neutral-300">
						<i className="fa-solid fa-magnifying-glass"></i>
					</button>
				</form>
			</div>
			<div className="flex items-center justify-between gap-10 lg:flex-1 max-w-[600px]">
				<ul className="items-center flex-1 hidden gap-4 justify-evenly lg:flex lg:flex-1">
					<li>
						<a
							href="/"
							className="transition-all duration-300 ease-in-out text-neutral-300 hover:text-secondary pageLink"
						>
							Home
						</a>
					</li>
					<li>
						<button
							id="navbarMyProductsButton"
							className="transition-all duration-300 ease-in-out text-neutral-300 hover:text-secondary"
						>
							Meus Anúncios
						</button>
					</li>
					<li>
						<a
							href="/products"
							className="transition-all duration-300 ease-in-out text-neutral-300 hover:text-secondary pageLink"
						>
							Produtos
						</a>
					</li>
				</ul>
				<div className="flex items-center justify-center gap-2">
					<button
						id="navbarLoginButton"
						title="Clique para entrar"
						className="block px-4 py-3 text-center border border-neutral-300 text-neutral-300 rounded-full min-w-[120px] text-sm transition-all duration-300 ease-in-out hover:bg-secondary hover:text-white-custom hover:border-transparent"
					>
						Entrar
					</button>
					<button
						id="navbarCreateProductButton"
						title="Clique para anunciar"
						className="px-4 py-3 text-center border rounded-full min-w-[120px] text-sm transition-all duration-300 ease-in-out bg-primary text-white-custom hover:bg-secondary hidden sm:block"
					>
						Anunciar
					</button>
				</div>
			</div>
		</nav>
	);
}
