import { AuthContextProvider } from "@/context/AuthContextProvider";
import { ModalContextProvider } from "@/context/ModalContextProvider";
import { ProductsContextProvider } from "@/context/ProductsContextProvider";

interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return (
		<AuthContextProvider>
			<ProductsContextProvider>
				<ModalContextProvider>{children}</ModalContextProvider>
			</ProductsContextProvider>
		</AuthContextProvider>
	);
}
