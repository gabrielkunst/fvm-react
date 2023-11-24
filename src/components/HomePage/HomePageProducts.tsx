import { CustomLink } from "../CustomLink";
import { HomePageSection } from "./HomePageSection";
import { HomePageTitle } from "./HomePageSectionTitle";
import { PopularProductCard } from "./PopularProductCard";
import AndaimesImage from "@/assets/andaimes.jpg";
import CompactadoresImage from "@/assets/compactador.jpg";
import DemolidoresImage from "@/assets/demolicao.jpg";
import BetoneiraImage from "@/assets/betoneira.jpg";

const PRODUCTS = [
	{ label: "Andaimes", image: AndaimesImage },
	{ label: "Compactadores", image: CompactadoresImage },
	{ label: "Betoneiras", image: BetoneiraImage },
	{ label: "Demolidores", image: DemolidoresImage },
];

export function HomePageProducts() {
	return (
		<HomePageSection>
			<HomePageTitle>Ferramentas Mais Alugadas</HomePageTitle>
			<div className="flex flex-wrap items-center justify-center gap-4 ">
				{PRODUCTS.map(({ label, image }) => (
					<PopularProductCard
						key={label}
						label={label}
						image={image}
					/>
				))}
			</div>
			<CustomLink href="/products" className="mx-auto mt-4">
				Ver todos
			</CustomLink>
		</HomePageSection>
	);
}
