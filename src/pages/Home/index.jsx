import { HomeContainer, GoToLogin } from "../../styles/container";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const userInfo = {
    token: localStorage.getItem("KenzieHub:Token"),
    name: localStorage.getItem("KenzieHub:Name"),
    module: localStorage.getItem("KenzieHub:Module"),
  };
  if (!userInfo.token) navigate("/");

  return (
    <HomeContainer>
      <nav>
        <img src={logo} alt="Kenzie Hub Logo" />
        <GoToLogin to={"/"} onClick={() => localStorage.clear()}>
          Sair
        </GoToLogin>
      </nav>
      <header>
        <div>
          <h3>Olá, {userInfo.name}</h3>
          <p>{userInfo.module}</p>
        </div>
      </header>
      <main>
        <h3>Que Pena! Estamos em desenvolvimento :(</h3>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades.
        </p>
      </main>
    </HomeContainer>
  );
}
