import { ModalContextProvider } from "@/context/ModalContextProvider";

interface ProvidersProps {
	children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
	return <ModalContextProvider>{children}</ModalContextProvider>;
}
