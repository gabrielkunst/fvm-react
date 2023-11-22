import { CustomLink } from "@/components/CustomLink";
import { twMerge } from "tailwind-merge";

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

export function HomePage() {
	return (
		<>
			<HomePageSection className="min-h-[calc(100svh-80px)] flex items-center bg-black">
				{/* carousel */}
				<div className="flex flex-col items-center gap-2 lg:gap-4 text-center text-custom-white max-w-[500px] mx-auto sm:items-start sm:mx-0 sm:text-left sm:max-w-[800px] lg:max-w-[1200px]">
					<h1 className="text-3xl font-bold xs:text-4xl text-primary lg:text-5xl">
						Faça Você Mesmo
					</h1>
					<h2 className="text-xl xs:text-2xl lg:text-3xl">
						Compre, alugue e divulgue suas ferramentas
					</h2>
					<p className="sm:text-lg md:text-xl lg:text-2xl">
						A FVM conecta você com vendedores de ferramentas de todo
						o país. Compre, venda e encontre exatamente o que
						precisa para o seu próximo projeto.
					</p>
					<CustomLink href="/products" className="mt-3">
						Ver anúncios
					</CustomLink>
				</div>
			</HomePageSection>

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
		</>
	);
}

// TODO: move to components
interface HomePageTitleProps {
	children: React.ReactNode;
}

function HomePageTitle({ children }: HomePageTitleProps) {
	return (
		<h3 className="my-4 text-3xl font-semibold text-center sm:mb-6 sm:mt-0">
			{children}
		</h3>
	);
}

// TODO: move to components
interface AboutCardProps {
	title: string;
	description: string;
}

function AboutCard({ description, title }: AboutCardProps) {
	return (
		<div className="md:w-[32%] text-center max-w-[500px] mx-auto md:mx-0">
			<h4 className="mb-2 text-xl font-medium text-primary">{title}</h4>
			<p>{description}</p>
		</div>
	);
}

// TODO: move to components
interface HomePageSectionProps {
	className?: string;
	children: React.ReactNode;
}

function HomePageSection({ children, className }: HomePageSectionProps) {
	return (
		<section
			className={twMerge(
				"p-4 py-8 sm:px-10 md:px-16 lg:px-24 w-full relative",
				className
			)}
		>
			{children}
		</section>
	);
}
