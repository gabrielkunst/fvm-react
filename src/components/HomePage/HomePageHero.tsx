import { CustomLink } from "../CustomLink";
import { Carousel } from "./Carousel";
import { HomePageSection } from "./HomePageSection";
import CarouselImage1 from "@/assets/carouselImage1.webp";
import CarouselImage2 from "@/assets/carouselImage2.webp";
import CarouselImage3 from "@/assets/carouselImage3.webp";

const CAROUSEL_IMAGES = [
	{
		image: CarouselImage1,
		label: "Primeira imagem",
	},
	{
		image: CarouselImage2,
		label: "Segunda imagem",
	},
	{
		image: CarouselImage3,
		label: "Terceira imagem",
	},
];

export function HomePageHero() {
	return (
		<HomePageSection className="min-h-[calc(100svh-80px)] flex items-center bg-gradient-to-tr from-black to-black/80 md:to-black/50 bg-opacity-80">
			<div className="flex flex-col items-center gap-2 lg:gap-4 text-center text-custom-white max-w-[500px] mx-auto sm:items-start sm:mx-0 sm:text-left sm:max-w-[800px] lg:max-w-[1200px]">
				<h1 className="text-3xl font-bold xs:text-4xl text-primary lg:text-5xl">
					Faça Você Mesmo
				</h1>
				<h2 className="text-xl xs:text-2xl lg:text-3xl">
					Compre, alugue e divulgue suas ferramentas
				</h2>
				<p className="sm:text-lg md:text-xl lg:text-2xl">
					A FVM conecta você com vendedores de ferramentas de todo o
					país. Compre, venda e encontre exatamente o que precisa para
					o seu próximo projeto.
				</p>
				<CustomLink href="/products" className="mt-3">
					Ver anúncios
				</CustomLink>
			</div>
			<div className="absolute inset-0 -z-10">
				<img
					className="object-cover w-full h-full md:hidden"
					src={CarouselImage2}
					alt="Imagem de fundo da página inicial"
				/>
				<Carousel
					className="hidden md:block"
					images={CAROUSEL_IMAGES}
					timeout={2500}
				/>
			</div>
		</HomePageSection>
	);
}
