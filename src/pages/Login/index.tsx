import { LoginContainer } from "../../styles/container";
import { Forms, RegisterLink } from "../../styles/forms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export interface iUserLogin {
  email: string;
  password: string;
}

export function Login() {
  const { onLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("KenzieHub:Token");

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

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
  } = useForm<iUserLogin>({
    resolver: yupResolver(yupSchema),
  });

  return (
    <LoginContainer>
      <img src={require("../../assets/logo.png")} alt="Kenzie Hub Logo" />
      <Forms onSubmit={handleSubmit(onLogin)}>
        <h2>Login</h2>
        <label htmlFor="logEmail">
          <p>Email</p>
          <input
            type="email"
            placeholder="E-mail de acesso"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </label>
        <label htmlFor="logPass">
          <p>Senha</p>
          <input
            type="passwordvbr"
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
