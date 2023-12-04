/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ProductController } from "@/controllers/ProductController";
import { Product } from "@/models/Product";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import FallbackImage from "@/assets/fallbackImage.png";
import { Button } from "@/components/Button";
import { Flag, Heart, HeartOff, MapPin, Pencil, Share2 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { ProductForm } from "@/components/ProductForm";
import { useModal } from "@/hooks/useModal";

export function ProductPage() {
	const { user } = useAuth();
	const [product, setProduct] = useState<Product | null>(null);
	const [onImageError, setOnImageError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isFavorite, setIsFavorite] = useState<boolean>(false);
	const { openModal, closeModal } = useModal();
	const params = useParams();
	const navigate = useNavigate();

	const handleFavorite = () => {
		toast.success(
			isFavorite ? "Produto desfavoritado" : "Produto favoritado"
		);
		setIsFavorite((prevState) => !prevState);
	};

	const handleShare = () => {
		navigator.clipboard.writeText(window.location.href);
		toast.success("Link do produto copiado");
	};

	const handleReport = () => {
		toast.success("Produto denunciado");
	};

	const handleContact = () => {
		navigate(`/users/${product?.owner}`);
	};

	const handleAddProductClick = () => {
		openModal({
			content: (
				<ProductForm
					defaultValues={product!}
					onFormSubmit={async (data) => {
						try {
							await ProductController.updateProductDoc(product!.id, data);

							const editedProduct = new Product({
								...product!,
								...data,
							});

							setProduct(editedProduct);
						} finally {
							closeModal();
						}
					}}
				/>
			),
			className: "max-w-[500px]",
		});
	};

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const { productId } = params;

				if (!productId) {
					toast.error("Produto não encontrado");
					navigate("/products");
					return;
				}

				const product = await ProductController.getProductDoc(
					productId
				);

				if (!product) {
					throw new Error(`Product with ID ${productId} was not found`)
				}

				setProduct(product);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
				toast.error("Erro ao carregar produto");
				navigate("/products");
			}
		};

		fetchProduct();
	}, []);

	return (
		<div className="flex flex-1 items-center  p-5 sm:p-10 md:p-12 min-h-[calc(100svh-80px)] md:min-h-0">
			{isLoading && <LoadingSpinner />}
			{!isLoading && product && (
				<div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:max-w-[1200px] w-full max-w-[350px] mx-auto h-fit animate-fade-in">
					<div className="overflow-hidden rounded-lg md:w-[500px] h-fit">
						<img
							src={onImageError ? FallbackImage : product.image}
							alt={`Imagem do produto ${product.name}`}
							className="object-cover w-full h-full"
							onError={() => setOnImageError(true)}
						/>
					</div>
					<div className="flex flex-col flex-1 gap-2 text-lg ">
						<div className="flex flex-col flex-1 gap-1">
							<h1 className="text-2xl font-semibold">
								{product.name}
							</h1>
							<p>{product.description}</p>
						</div>
						<div className="flex flex-col gap-1">
							<p className="font-semibold">
								{product.formattedPrice}
							</p>
							<p>
								À <strong>12km</strong> de distância
							</p>
							<p className="flex items-center justify-center gap-2 md:justify-start">
								<MapPin /> Foz do Iguaçu - PR
							</p>
						</div>
						<div className="flex flex-col justify-between gap-2 md:flex-row">
							<div className="flex flex-col gap-2 md:flex-row">
								{user?.id === product.owner && (
									<Button
										onClick={handleAddProductClick}
										className="w-full md:w-fit"
										variation="secondary"
									>
										<Pencil />
										<span className="md:hidden">
											Editar
										</span>
									</Button>
								)}
								<Button
									onClick={handleFavorite}
									className="w-full md:w-fit"
									variation="secondary"
								>
									{isFavorite ? <HeartOff /> : <Heart />}
									<span className="md:hidden">
										{isFavorite
											? "Desfavoritar"
											: "Favoritar"}
									</span>
								</Button>
								<Button
									onClick={handleShare}
									className="w-full md:w-fit"
									variation="secondary"
								>
									<Share2 />
									<span className="md:hidden">
										Compartilhar
									</span>
								</Button>
								<Button
									onClick={handleReport}
									className="w-full md:w-fit"
									variation="secondary"
								>
									<Flag />
									<span className="md:hidden">Denunciar</span>
								</Button>
							</div>
							<Button
								onClick={handleContact}
								className="w-full md:w-fit"
							>
								Contato
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
