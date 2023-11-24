import { CustomLink } from "../CustomLink";
import { AboutCard } from "./HomePageAboutCard";
import { HomePageSection } from "./HomePageSection";
import { HomePageTitle } from "./HomePageSectionTitle";

const ABOUT_CARDS = [
	{
		title: "Compra e Venda",
		description:
			"Nossa plataforma foi criada para facilitar a transação de ferramentas, conectando compradores e vendedores em um ambiente seguro e confiável. Valorizamos a qualidade, a transparência e a satisfação em cada negócio realizado.",
	},
	{
		title: "Acesso Simplificado",
		description:
			"Entendemos a importância de uma experiência do usuário eficaz. Por isso, priorizamos um design intuitivo e recursos ágeis, garantindo que você encontre o que procura com facilidade e rapidez, seja no desktop ou no celular.",
	},

	{
		title: "Produtos Acessíveis",
		description:
			"Nossa motivação inicial foi criar um espaço onde pessoas pudessem encontrar ferramentas de qualidade, muitas vezes usadas, a preços mais acessíveis. Ao conectar vendedores e compradores, facilitamos o acesso a produtos de valor com custos reduzidos, beneficiando ambas as partes.",
	},
];

export function HomePageAbout() {
	return (
		<HomePageSection>
			<HomePageTitle>Sobre Nós</HomePageTitle>
			<div className="flex flex-col items-start justify-between gap-4 md:flex-row">
				{ABOUT_CARDS.map(({ description, title }) => (
					<AboutCard
						key={title}
						description={description}
						title={title}
					/>
				))}
			</div>
			<CustomLink className="mx-auto mt-4" href="/products">
				Saiba mais
			</CustomLink>
		</HomePageSection>
	);
}
