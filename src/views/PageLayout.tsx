import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { Providers } from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

export function PageLayout() {
	return (
		<Providers>
			<Toaster />
			<div className="flex flex-col min-h-[100svh] animate-fade-in">
				<Navbar />
				<main className="flex flex-col flex-1">
					<Outlet />
				</main>
				<Footer />
			</div>
		</Providers>
	);
}
