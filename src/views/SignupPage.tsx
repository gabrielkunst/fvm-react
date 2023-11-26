import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Input } from "@/components/Input";
import { InputErrorMessage } from "@/components/InputErrorMessage";
import { PasswordInput } from "@/components/PasswordInput";
import { useSignup } from "@/hooks/useSignup";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	name: z
		.string()
		.min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
		.max(50, { message: "Nome deve ter entre 3 e 50 caracteres" }),
	email: z.string().email({ message: "Email inválido" }),
	password: z
		.string()
		.min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

type FormSchema = z.infer<typeof formSchema>;

export function SignupPage() {
	const { isLoading, onSignup } = useSignup();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = async (data) => {
		await onSignup(data);
	};

	return (
		<div className="flex-1 flex min-h-[calc(100svh-80px)] bg-[url('../assets/loginbanner.webp')] bg-center bg-cover">
			<div className="flex items-center justify-center flex-1 w-full min-h-full bg-black/50 backdrop-blur-sm">
				<Card className="w-[90%] max-w-[550px]">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h2 className="mb-3 text-xl font-medium">Cadastro</h2>
						<div className="flex flex-col w-full gap-2">
							<div>
								<Input
									disabled={isLoading}
									isError={!!errors.name}
									placeholder="Nome"
									register={register("name")}
									type="text"
								/>
								{errors.name && (
									<InputErrorMessage>
										{errors.name.message}
									</InputErrorMessage>
								)}
							</div>
							<div>
								<Input
									disabled={isLoading}
									isError={!!errors.email}
									placeholder="Email"
									register={register("email")}
									type="email"
								/>
								{errors.email && (
									<InputErrorMessage>
										{errors.email.message}
									</InputErrorMessage>
								)}
							</div>
							<div>
								<PasswordInput
									disabled={isLoading}
									isError={!!errors.password}
									placeholder="Senha"
									register={register("password")}
								/>
								{errors.password && (
									<InputErrorMessage>
										{errors.password.message}
									</InputErrorMessage>
								)}
							</div>
						</div>
						<Button
							isLoading={isLoading}
							className="mx-auto mt-5 py-2 min-w-[150px]"
						>
							Cadastrar
						</Button>
					</form>
				</Card>
			</div>
		</div>
	);
}
