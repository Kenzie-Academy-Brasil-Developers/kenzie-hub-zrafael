import AuthProvider from "./contexts/AuthContext";
import { WebRoutes } from "./routes/routes";

function App() {
  return (
<AuthProvider>
      <WebRoutes />;
    </AuthProvider>
  );
}

export default App;
