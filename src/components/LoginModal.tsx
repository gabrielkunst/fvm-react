import { Link } from "react-router-dom";
import { Button } from "./Button";
import { Input } from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInput } from "./PasswordInput";
import { useLogin } from "@/hooks/useLogin";
import { InputErrorMessage } from "./InputErrorMessage";
import { ModalTitle } from "./ModalTitle";

interface LoginModalProps {
	onClose: () => void;
}

const formSchema = z.object({
	email: z.string().email({
		message: "Email inválido",
	}),
	password: z.string().min(6, { message: "Senha inválida" }),
});

type FormSchema = z.infer<typeof formSchema>;

export function LoginModal({ onClose }: LoginModalProps) {
	const { isLoading, onLogin } = useLogin();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = async (data) => {
		try {
			await onLogin(data);
			onClose();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ModalTitle>Login</ModalTitle>
			<div className="flex flex-col w-full gap-2">
				<div>
					<Input
						isError={!!errors.email}
						disabled={isLoading}
						placeholder="Email"
						type="email"
						register={register("email")}
					/>
					{errors.email && (
						<InputErrorMessage>
							{errors.email?.message}
						</InputErrorMessage>
					)}
				</div>
				<div>
					<PasswordInput
						isError={!!errors.password}
						disabled={isLoading}
						placeholder="Senha"
						register={register("password")}
					/>
					{errors.password && (
						<InputErrorMessage>
							{errors.password?.message}
						</InputErrorMessage>
					)}
				</div>
			</div>
			<Button
				isLoading={isLoading}
				className="mx-auto mt-5 py-2 min-w-[150px]"
			>
				Entrar
			</Button>
			<p className="mt-4 text-center">
				Não tem uma conta?{" "}
				<Link to="/signup" onClick={onClose} className="text-primary">
					Cadastre-se
				</Link>
			</p>
		</form>
	);
}
