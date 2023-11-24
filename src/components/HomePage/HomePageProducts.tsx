import { CustomLink } from "../CustomLink";
import { HomePageSection } from "./HomePageSection";
import { HomePageTitle } from "./HomePageSectionTitle";
import { PopularProductCard } from "./PopularProductCard";

const PRODUCTS = [
	{ label: "Andaimes", image: "" },
	{ label: "Compactadores", image: "" },
	{ label: "Furadeiras", image: "" },
	{ label: "Demolidores", image: "" },
];

export function HomePageProducts() {
	return (
		<HomePageSection>
			<HomePageTitle>Ferramentas Mais Alugadas</HomePageTitle>
			<div className="grid grid-cols-2 gap-2 md:grid-cols-4">
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
