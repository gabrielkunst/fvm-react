import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import { NotFound } from "@/views/NotFound";
import { PageLayout } from "@/views/PageLayout";
import { HomePage } from "@/views/HomePage";
import { ProductsPage } from "@/views/ProductsPage";
import { ProductPage } from "@/views/ProductPage";
import { ProfilePage } from "@/views/ProfilePage";
import { SignupPage } from "@/views/SignupPage";

export function App() {
	return (
		<Router>
			<Routes>
				<Route element={<PageLayout />}>
					<Route index path="/" element={<HomePage />} />
					<Route path="products" element={<ProductsPage />} />
					<Route
						path="products/:productId"
						element={<ProductPage />}
					/>
					<Route path="users/:userId" element={<ProfilePage />} />
					<Route path="signup" element={<SignupPage />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
