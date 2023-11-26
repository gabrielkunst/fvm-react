import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface PasswordInputProps {
	placeholder: string;
	className?: string;
	register: UseFormRegisterReturn;
	disabled?: boolean;
	isError?: boolean;
}

export function PasswordInput({
	placeholder,
	className,
	register,
	disabled,
	isError = false,
}: PasswordInputProps) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const handlePasswordTypeToggle = () => {
		setIsPasswordVisible((prevState) => !prevState);
	};
	return (
		<div className="relative flex items-center justify-between">
			<input
				{...register}
				disabled={disabled}
				type={isPasswordVisible ? "text" : "password"}
				placeholder={placeholder}
				className={twMerge(
					"p-2 border rounded-lg w-full flex-1 pr-10 disabled:opacity-80 disabled:cursor-not-allowed disabled:bg-gray-200",
					!isError && "focus:outline-primary",
					isError && "border-red-500 outline-red-500",
					className
				)}
			/>
			<button
				disabled={disabled}
				type="button"
				onClick={handlePasswordTypeToggle}
				className="absolute text-gray-400 cursor-pointer right-3 disabled:opacity-80 disabled:cursor-not-allowed"
			>
				{isPasswordVisible ? (
					<EyeOffIcon size={22} />
				) : (
					<EyeIcon size={22} />
				)}
			</button>
		</div>
	);
}
