import { Link, useNavigate } from "react-router-dom";
import { NavbarLink } from "./NavbarLink";
import { NavbarSearchForm } from "./NavbarSearchForm";
import { Logo } from "../Logo";
import { Button } from "../Button";
import { useModal } from "@/hooks/useModal";
import { LoginModal } from "../LoginModal";
import { useAuth } from "@/hooks/useAuth";
import { ProductForm } from "../ProductForm";
import { ProductController } from "@/controllers/ProductController";
import { UserController } from "@/controllers/UserController";

export function Navbar() {
	const { openModal, closeModal } = useModal();
	const { user } = useAuth();
	const navigate = useNavigate();

	const NAVBAR_LINKS = [
		{ label: "Home", href: "/" },
		{ label: "Meus Anúncios", href: `users/${user?.id}` },
		{ label: "Produtos", href: "/products" },
	];

	const handleLoginModal = () => {
		openModal({
			content: <LoginModal onClose={closeModal} />,
			className: "max-w-[500px]",
		});
	};

	const handleAddProductClick = () => {
		openModal({
			content: (
				<ProductForm
					onFormSubmit={async (data) => {
						const createdProduct =
							await ProductController.createProductDoc({
								userId: user!.id,
								data,
							});

						if (!createdProduct) {
							return;
						}

						await UserController.updateUserDoc({
							userId: user!.id,
							newDocData: {
								ownProducts: [
									...user!.ownProducts,
									createdProduct.id,
								],
							},
						});

						closeModal();
					}}
				/>
			),
			className: "max-w-[500px]",
		});
	};

	const handleUserProfileClick = () => {
		navigate(`/users/${user?.id}`);
	};

	return (
		<nav className="bg-custom-white flex sticky top-0 items-center border-b border-neutral-200 justify-between overflow-hidden py-3 px-5 max-h-[80px] z-[99] min-h-[80px] lg:gap-10 ">
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
						onClick={() =>
							user ? handleUserProfileClick() : handleLoginModal()
						}
						rounded="full"
						variation="outlined"
						className="min-w-[120px]"
						size="sm"
					>
						{user ? user.name : "Entrar"}
					</Button>
					<Button
						onClick={() =>
							user ? handleAddProductClick() : handleLoginModal()
						}
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
