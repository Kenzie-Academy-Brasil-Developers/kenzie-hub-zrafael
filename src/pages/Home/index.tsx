import { HomeContainer, GoToLogin } from "../../styles/container";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalWindow } from "../../components/Modal";
import { TechList } from "../../components/TechList";
import { ModalLink } from "../../styles/techlist";

export function Home() {
  const navigate = useNavigate();
  const { loading, profile, modal, setModal } = useContext(AuthContext);
  const userToken = localStorage.getItem("KenzieHub:Token");

  useEffect(() => {
    if (!userToken) {
      navigate("/");
    }
  }, [navigate, userToken]);

  if (loading) return <h3 className="loading">Loading</h3>;
  return (
    <>
      <HomeContainer>
        {modal ? <ModalWindow /> : null}
        <nav>
          <img src={require("../../assets/logo.png")} alt="Kenzie Hub Logo" />
          <GoToLogin to={"/"} onClick={() => localStorage.clear()}>
            Sair
          </GoToLogin>
        </nav>
        <header>
          <div>
            <h3>Olá, {profile?.name}</h3>
            <p>{profile?.course_module}</p>
          </div>
        </header>
        <main>
          <div className="ulHeader">
            <h3>Tecnologias</h3>
            <ModalLink onClick={() => setModal(true)}>+</ModalLink>
          </div>
          {profile ? <TechList techData={profile?.techs} /> : ""}
        </main>
      </HomeContainer>
    </>
  );
}
