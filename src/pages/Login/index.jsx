import { LoginContainer } from "../../styles/container";
import logo from "../../assets/logo.png";
import { Forms, RegisterLink } from "../../styles/forms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/request";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

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

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token, user } = res.data;
        localStorage.setItem("KenzieHub:Token", token);
        localStorage.setItem("KenzieHub:Name", user.name);
        localStorage.setItem("KenzieHub:Name", user.couse_module);
        toast.success("login realizado com sucesso!", {
          style: {
            background: "var(--Grey-3",
            color: "var(--Grey-1)",
            fontWeight: "700",
          },
        });
        setTimeout(() => navigate("/home", 2500));
      })

      .catch((err) => {
        toast.error(`${err.response.data.message}`, {
          style: {
            background: "var(--Grey-3)",
            color: "var(--Grey-1)",
            fontWeight: "700",
          },
        });
        return false;
      });
  };
  return (
    <LoginContainer>
      <img src={logo} alt="Kenzie Hub Logo" />
      <Forms onSubmit={handleSubmit(onSubmit)}>
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
