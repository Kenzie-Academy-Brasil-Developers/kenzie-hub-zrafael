import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/request";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
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
        } catch (error) {
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

  async function registerUser(data) {
    try {
      const response = await api.post("/users", data);

      toast.success(
        "Conta criada com sucesso!",
        {
          style: {
            background: "var(--Grey-3)",
            color: "var(--Grey-1)",
            fontWeight: "700",
          },
        },
        setTimeout(() => navigate("/"), 2500)
      );
      console.log(response);
    } catch (error) {
      toast.error(`Ops, algo deu errado!  ${error.response.data.message}`, {
        style: {
          background: "var(--Grey-3)",
          color: "var(--Grey-1)",
          fontWeight: "700",
        },
      });
    }
  }

  async function onLogin(info) {
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
    } catch (error) {
      toast.error(`Ops, algo deu errado!  ${error.response.data.message}`, {
        style: {
          background: "var(--Grey-3)",
          color: "var(--Grey-1)",
          fontWeight: "700",
        },
      });
    }
  }

  async function addTech(info) {
    const token = localStorage.getItem("KenzieHub:Token");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api.post("/users/techs", info);
        setModal(false);
        window.location.reload();
      } catch (error) {
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

  async function delTech(info) {
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
      } catch (error) {
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
