export function ProductCardSkeleton() {
	return (
		<article className="flex flex-col overflow-hidden border rounded-lg w-full h-[230px]">
			<div className="h-[150px] overflow-hidden">
				<div className="w-full h-full bg-gray-200 animate-pulse"></div>
			</div>
			<div className="flex flex-col flex-1 gap-2 p-2">
				<div className="flex-1">
					<div className="w-3/4 h-5 bg-gray-200 rounded-md animate-pulse"></div>
				</div>
				<div className="flex items-center justify-between ">
					<div className="w-1/5 h-5 bg-gray-200 rounded-md animate-pulse"></div>
					<div className="w-1/5 h-5 bg-gray-200 rounded-md animate-pulse"></div>
				</div>
			</div>
		</article>
	);
}
