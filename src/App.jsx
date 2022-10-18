import AuthProvider from "./contexts/AuthContext";
import { WebRoutes } from "./routes/routes";

function App() {
  return (
    // <WebProvider>
    <AuthProvider>
      <WebRoutes />;
    </AuthProvider>
    // </WebProvider>
  );
}

export default App;
