import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Tecnologias } from "../../styles/techlist";

export function TechList({ techData }) {
  const { delTech } = useContext(AuthContext);
  if (!techData.length) {
    return (
      <Tecnologias>
        <ul>Não há tecnologias cadastradas.</ul>
      </Tecnologias>
    );
  } else {
    return (
      <Tecnologias>
        <ul>
          {techData.map((tech) => {
            return (
              <li key={tech.id}>
                <p>{tech.title}</p>
                <div>
                  <small>{tech.status}</small>
                  <span
                    id={tech.id}
                    className="material-symbols-outlined"
                    onClick={(event) => delTech(event.target.id)}
                  >
                    delete
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </Tecnologias>
    );
  }
}
