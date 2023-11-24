import { CustomLink } from "../CustomLink";
import { HomePageCategoryCard } from "./HomePageCategoryCard";
import { HomePageSection } from "./HomePageSection";
import { HomePageTitle } from "./HomePageSectionTitle";

const CATEGORIES = [
	{ label: "Cocina", image: "https://picsum.photos/200/300" },
	{ label: "Electrodomésticos", image: "https://picsum.photos/200/300" },
	{ label: "Hogar", image: "https://picsum.photos/200/300" },
	{ label: "Baño", image: "https://picsum.photos/200/300" },
];

export function HomePageCategories() {
	return (
		<HomePageSection>
			<HomePageTitle>Categories</HomePageTitle>
			<div className="grid grid-cols-2 gap-2 md:grid-cols-4">
				{CATEGORIES.map(({ label, image }) => (
					<HomePageCategoryCard label={label} image={image} />
				))}
			</div>
			<CustomLink href="/products" className="mx-auto mt-4">
				Ver categorias
			</CustomLink>
		</HomePageSection>
	);
}
