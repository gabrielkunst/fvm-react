import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import { NotFound } from "./views/NotFound";

export function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<h1>Home</h1>} />
				<Route path="/about" element={<h1>About</h1>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}
