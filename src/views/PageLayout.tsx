import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router";

export function PageLayout() {
	return (
		<div className="flex flex-col min-h-[100svh]">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}