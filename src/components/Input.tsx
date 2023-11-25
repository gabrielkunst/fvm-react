import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	type: "text" | "email";
	placeholder: string;
	className?: string;
	register: UseFormRegisterReturn;
	isError?: boolean;
}

export function Input({
	type,
	placeholder,
	className,
	register,
	isError = false,
	...props
}: InputProps) {
	return (
		<input
			{...props}
			{...register}
			type={type}
			placeholder={placeholder}
			className={twMerge(
				"p-2 border rounded-lg  w-full disabled:opacity- outline-transparent disabled:cursor-not-allowed disabled:bg-gray-200",
				!isError && "focus:outline-primary",
				isError && "border-red-500 outline-red-500",
				className
			)}
		/>
	);
}
