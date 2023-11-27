export function EmptyList() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full gap-4 text-center animate-fade-in">
			<h2 className="text-2xl font-medium">Nenhum produto encontrado</h2>
			<p>
				Tente mudar o filtro ou espere até que algum produto seja
				adicionado
			</p>
		</div>
	);
}
