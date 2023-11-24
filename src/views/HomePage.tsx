import { HomePageAbout } from "@/components/HomePage/HomePageAbout";
import { HomePageCategories } from "@/components/HomePage/HomePageCategories";
import { HomePageHero } from "@/components/HomePage/HomePageHero";
import { HomePageProducts } from "@/components/HomePage/HomePageProducts";

export function HomePage() {
	return (
		<>
			<HomePageHero />
			<HomePageAbout />
			<HomePageProducts />
			<HomePageCategories />
		</>
	);
}
