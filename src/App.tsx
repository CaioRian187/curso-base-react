import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { Datail } from "./pages/Datail";
import { Login } from "./pages/public/Login";
import { AuthProvider } from "./shared/contexts/AuthContext";

export function App() {

  const isAuthenticate = false;

  return (
    <AuthProvider>
      <BrowserRouter>
        {isAuthenticate && (
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/detalhe/:id" element={<Datail />} />
              <Route path="*" element={<Navigate to='/' />} />
            </Routes>
          </AppLayout>
        )}
        {!isAuthenticate && (
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </AuthProvider>
  );
}
