import { createContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iTechForm } from "../components/FormTech";
import { iTechList } from "../components/TechList";
import { iUserLogin } from "../pages/Login";
import { iRegisterUser } from "../pages/Register";
import api from "../services/request";

interface iAuthProviderChildren {
  children: ReactNode;
}

export interface iUserProfile {
  name: string;
  course_module: string;
  techs: iTechList[];
}

interface iAuthContext {
  onLogin: (info: iUserLogin) => void;
  registerUser: (info: iRegisterUser) => void;
  delTech: (id: string) => void;
  addTech: (info: iTechForm) => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  modal: boolean;
  profile: iUserProfile | null;
}

export const AuthContext = createContext<iAuthContext>({} as iAuthContext);

function AuthProvider({ children }: iAuthProviderChildren) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProfile() {
      const token = localStorage.getItem("KenzieHub:Token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const dataProfile = await api.get("/profile");

          setProfile(dataProfile.data);
          console.log(dataProfile.data);
          setLoading(false);
        } catch (error: unknown?) {
          toast.error(
            `Ops, algo deu errado logue novamente!  ${error.response.data.message}`,
            {
              style: {
                background: "var(--Grey-3)",
                color: "var(--Grey-1)",
                fontWeight: "700",
              },
            }
          );
          localStorage.clear();
        }
      }
    }
    getProfile();
  }, []);

  async function registerUser(data: iRegisterUser) {
    try {
      const response = await api.post("/users", data);

      toast.success("Conta criada com sucesso!", {
        style: {
          background: "var(--Grey-3)",
          color: "var(--Grey-1)",
          fontWeight: "700",
        },
      });
      setTimeout(() => navigate("/"), 2500);
      console.log(response);
    } catch (error: unknown?) {
      toast.error(`Ops, algo deu errado!  ${error.response.data.message}`, {
        style: {
          background: "var(--Grey-3)",
          color: "var(--Grey-1)",
          fontWeight: "700",
        },
      });
    }
  }

  async function onLogin(info: iUserLogin) {
    try {
      const response = await api.post("/sessions", info);

      localStorage.setItem("KenzieHub:Token", response.data.token);
      toast.success("login realizado com sucesso!", {
        style: {
          background: "var(--Grey-3",
          color: "var(--Grey-1)",
          fontWeight: "700",
        },
      });
      window.location.replace("./home");
    } catch (error: unknown?) {
      toast.error(`Ops, algo deu errado!  ${error.response.data.message}`, {
        style: {
          background: "var(--Grey-3)",
          color: "var(--Grey-1)",
          fontWeight: "700",
        },
      });
    }
  }

  async function addTech(info: iTechForm) {
    const token = localStorage.getItem("KenzieHub:Token");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.post("/users/techs", info);
        setModal(false);
        window.location.reload();
      } catch (error: unknown?) {
        toast.error(`Ops, algo deu errado!  ${error.response.data.message}`, {
          style: {
            background: "var(--Grey-3)",
            color: "var(--Grey-1)",
            fontWeight: "700",
          },
        });
        setModal(false);
        window.location.reload();
      }
    }
  }

  async function delTech(info: string) {
    const token = localStorage.getItem("KenzieHub:Token");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.delete(`/users/techs/${info}`);
        toast.success("Tecnologia deletada com sucesso!", {
          style: {
            background: "var(--Grey-3)",
            color: "var(--Grey-1)",
            fontWeight: "700",
          },
        });
        window.location.reload();
      } catch (error: unknown?) {
        toast.error(`Ops, algo deu errado!  ${error.response.data.message}`, {
          style: {
            background: "var(--Grey-3)",
            color: "var(--Grey-1)",
            fontWeight: "700",
          },
        });
        window.location.reload();
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        profile,
        loading,
        modal,
        onLogin,
        registerUser,
        setModal,
        addTech,
        delTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
