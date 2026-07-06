import { useIsAuthenticated } from "./shared/contexts/AuthContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { AppLayout } from "./shared/layout/AppLayout";
import { Datail } from "./pages/Datail";
import { Login } from "./pages/public/Login";


export const AppRoutes = () => {
    const isAuthenticate = useIsAuthenticated();

    return (
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
    );
}