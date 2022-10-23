import AuthProvider from "./contexts/AuthContext";
import { WebRoutes } from "./routes/routes";

function App() {
  return (
<<<<<<<<< Temporary merge branch 1
    <AuthProvider>
      <WebRoutes />;
    </AuthProvider>
=========
    
    <AuthProvider>
      <WebRoutes />;
    </AuthProvider>
    
>>>>>>>>> Temporary merge branch 2
  );
}

export default App;
