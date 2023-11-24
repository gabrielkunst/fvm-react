import { CustomLink } from "@/components/CustomLink";

export function NotFound() {
	return (
		<div className="flex items-center justify-center flex-1">
			<div className="flex flex-col items-center gap-2 p-4 text-center">
				<h1 className="text-xl font-medium sm:text-3xl">
					Página Não Encontrada
				</h1>
				<p className="sm:text-lg">
					A página que você está procurando não foi encontrada.
				</p>
				<CustomLink href="/" className="mt-2">
					Home
				</CustomLink>
			</div>
		</div>
	);
}
