import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router";

export function PageLayout() {
	return (
		<div>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}
