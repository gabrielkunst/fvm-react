import { Loader2 } from "lucide-react";

export function LoadingSpinner() {
	return (
		<div className="flex items-center justify-center w-full ">
			<Loader2 size={60} className="text-primary animate-spin" />
		</div>
	);
}
