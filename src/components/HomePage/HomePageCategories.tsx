import { CustomLink } from "../CustomLink";
import { HomePageCategoryCard } from "./HomePageCategoryCard";
import { HomePageSection } from "./HomePageSection";
import { HomePageTitle } from "./HomePageSectionTitle";
import CategoryCleaningImage from "@/assets/categoryCleaningImage.webp";
import CategoryConstructionImage from "@/assets/categoryConstructionImage.webp";
import CategoryGardeningImage from "@/assets/categoryGardeningImage.webp";

const CATEGORIES = [
	{ label: "Limpeza", image: CategoryCleaningImage, value: "cleaning" },
	{
		label: "Construção",
		image: CategoryConstructionImage,
		value: "construction",
	},
	{ label: "Jardinagem", image: CategoryGardeningImage, value: "gardening" },
];

export function HomePageCategories() {
	return (
		<HomePageSection>
			<HomePageTitle>Categories</HomePageTitle>
			<div className="flex flex-wrap items-center justify-center gap-4">
				{CATEGORIES.map(({ label, image, value }) => (
					<HomePageCategoryCard
						key={value}
						value={value}
						label={label}
						image={image}
					/>
				))}
			</div>
			<CustomLink href="/products" className="mx-auto mt-4">
				Ver categorias
			</CustomLink>
		</HomePageSection>
	);
}
