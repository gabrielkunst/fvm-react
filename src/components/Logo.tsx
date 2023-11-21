import LogoImage from "@/assets/FVMLogoWithText.webp";

export function Logo() {
	return (
		<img
			src={LogoImage}
			className="object-cover w-full h-full"
			alt="Logo da FVM"
		/>
	);
}
