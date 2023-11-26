import { Loader2 } from "lucide-react";
import { Logo } from "./Logo";

export function Loading() {
	return (
		<div className="flex-1 flex items-center justify-center min-h-[100svh]">
			<div className="flex flex-col items-center justify-center gap-2 animate-fade-in">
				<div className="w-48 mb-4 h-fit">
					<Logo />
				</div>
				<Loader2 className="animate-spin text-secondary" size={60} />
			</div>
		</div>
	);
}
