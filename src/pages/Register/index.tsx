import { RegisterContainer, GoToLogin } from "../../styles/container";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Forms } from "../../styles/forms";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export interface iRegisterUser {
  name: string;
  email: string;
  password: string;
  verification: string;
  bio: string;
  contact: string;
  course_module: string;
}

export function Register() {
  const { registerUser } = useContext(AuthContext);
  const token = localStorage.getItem("KenzieHub:Token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatorio")
      .matches(/^[A-Z]{1}[a-zA-ZÁ-ü ']{1,}[0-9]{0,0}$/, "Nome inválido"),
    email: yup.string().required("E-mail obrigatorio").email("E-mail invalido"),
    password: yup
      .string()
      .required("Senha obrigatoria")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!])(?:([0-9a-zA-Z$*&@#!])(?!\1)){8,}$/,
        "Senha inválida"
      ),
    verification: yup
      .string()
      .required("Verificação obrigatoria")
      .oneOf([yup.ref("password"), null], "Verificação incorreta"),
    bio: yup.string().required("Bio obrigatoria"),
    contact: yup.string().required("Contato obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUser>({
    resolver: yupResolver(formSchema),
  });

  return (
    <RegisterContainer>
      <nav>
        <img src={require("../../assets/logo.png")} alt="Kenzie Hub Logo" />
        <GoToLogin to={"/"}>Voltar</GoToLogin>
      </nav>
      <Forms onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>
        <strong>Rápido e grátis, vamos nessa.</strong>
        <label htmlFor="userNome">
          <p>Nome</p>
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </label>
        <label htmlFor="userEmail">
          <p>Email</p>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </label>
        <label htmlFor="userPass">
          <p>Senha</p>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </label>
        <label htmlFor="checkPass">
          <p>Confirmar Senha</p>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("verification")}
          />
          <span>{errors.verification?.message}</span>
        </label>
        <label htmlFor="userBio">
          <p>Bio</p>
          <input
            type="text"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>
        </label>
        <label htmlFor="userContato">
          <p>Contato</p>
          <input
            type="text"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>
        </label>
        <label htmlFor="userModulo">
          <p>Selecionar módulo</p>
          <select {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Módulo 1
            </option>
            <option value="Segundo módulo (Frontend Avançado)">Módulo 2</option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Módulo 3
            </option>
            <option value="Quarto módulo (Backend Avançado)">Módulo 4</option>
          </select>
        </label>
        <button type="submit">Cadastrar</button>
      </Forms>
    </RegisterContainer>
  );
}
