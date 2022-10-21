import { RegisterContainer, GoToLogin } from "../../styles/container";
import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Forms } from "../../styles/forms";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function Register() {
  const { registerUser } = useContext(AuthContext);

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
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <RegisterContainer>
      <nav>
        <img src={logo} alt="Kenzie Hub Logo" />
        <GoToLogin to={"/"}>Voltar</GoToLogin>
      </nav>
      <Forms onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>
        <strong>Rápido e grátis, vamos nessa.</strong>
        <label htmlFor="userNome">
          <p>Nome</p>
          <input
            type="text"
            name="userNome"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </label>
        <label htmlFor="userEmail">
          <p>Email</p>
          <input
            type="email"
            name="userEmail"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>
        </label>
        <label htmlFor="userPass">
          <p>Senha</p>
          <input
            type="password"
            name="userPass"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
        </label>
        <label htmlFor="checkPass">
          <p>Confirmar Senha</p>
          <input
            type="password"
            name="checkPass"
            placeholder="Digite novamente sua senha"
            {...register("verification")}
          />
          <span>{errors.verification?.message}</span>
        </label>
        <label htmlFor="userBio">
          <p>Bio</p>
          <input
            type="text"
            name="userBio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <span>{errors.bio?.message}</span>
        </label>
        <label htmlFor="userContato">
          <p>Contato</p>
          <input
            type="text"
            name="userContato"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>
        </label>
        <label htmlFor="userModulo">
          <p>Selecionar módulo</p>
          <select type="text" name="userModulo" {...register("course_module")}>
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
