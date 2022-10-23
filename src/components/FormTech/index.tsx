import { Forms } from "../../styles/forms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export interface iTechForm {
  title: string;
  status: string;
}

export function TechForm() {
  const { addTech, setModal } = useContext(AuthContext);

  const yupSchema = yup.object().shape({
    title: yup.string().required("Preencha com uma tecnologia."),
    status: yup.string().required("Seleção inválida"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iTechForm>({
    resolver: yupResolver(yupSchema),
  });

  return (
    <Forms onSubmit={handleSubmit(addTech)}>
      <div className="formHeader">
        <h3>Cadastrar Tecnologia</h3>
        <h4 onClick={() => setModal(false)}>X</h4>
      </div>
      <div className="modalForm">
        <label htmlFor="techNome">
          <p>Nome</p>
          <input type="text" placeholder="Tecnologia" {...register("title")} />
          <span>{errors.title?.message}</span>
        </label>
        <label htmlFor="techStatus">
          <p>Selecionar status</p>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <span>{errors.status?.message}</span>
        </label>
        <button type="submit">Cadastrar Tecnologia</button>
      </div>
    </Forms>
  );
}
