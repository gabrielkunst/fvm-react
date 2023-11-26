import { UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	register: UseFormRegisterReturn;
	isError?: boolean;
}

export function Textarea({
	placeholder,
	isError = false,
	register,
	className,
	...props
}: TextareaProps) {
	return (
		<textarea
			{...register}
			{...props}
			placeholder={placeholder}
			className={twMerge(
				"p-2 border rounded-lg  w-full disabled:opacity-80 outline-transparent disabled:cursor-not-allowed disabled:bg-gray-200 min-h-[100px] resize-none",
				!isError && "focus:outline-primary",
				isError && "border-red-500 outline-red-500",
				className
			)}
		></textarea>
	);
}
