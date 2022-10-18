import { LoginContainer } from "../../styles/container";
import logo from "../../assets/logo.png";
import { Forms, RegisterLink } from "../../styles/forms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Login() {
  const { onLogin } = useContext(AuthContext);

  const yupSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Preencha o campo de email."),
    password: yup.string().required("Preencha o campo com uma senha."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  return (
    <LoginContainer>
      <img src={logo} alt="Kenzie Hub Logo" />
      <Forms onSubmit={handleSubmit(onLogin)}>
        <h2>Login</h2>
        <label htmlFor="logEmail">
          <p>Email</p>
          <input
            type="email"
            name="logEmail"
            placeholder="E-mail de acesso"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </label>
        <label htmlFor="logPass">
          <p>Senha</p>
          <input
            type="password"
            name="logPass"
            placeholder="Senha de acesso"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </label>
        <button type="submit">Entrar</button>
        <strong>Ainda não possui uma conta?</strong>
        <RegisterLink to={"/register"}>Cadastre-se</RegisterLink>
      </Forms>
    </LoginContainer>
  );
}