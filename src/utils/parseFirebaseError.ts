export function parseFirebaseError(error: string) {
	switch (error) {
		case "auth/invalid-email":
			return "E-mail inválido.";
		case "auth/user-disabled":
			return "Usuário desativado.";
		case "auth/user-not-found":
			return "Usuário não encontrado.";
		case "auth/wrong-password":
			return "Senha incorreta.";
		case "auth/email-already-in-use":
			return "E-mail já está em uso.";
		case "auth/weak-password":
			return "Senha muito fraca.";
		case "auth/operation-not-allowed":
			return "Operação não permitida.";
		case "auth/invalid-login-credentials":
			return "Credenciais de login inválidas.";
		default:
			return "Erro ao realizar login.";
	}
}
