import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function ProtectedRoute() {
  const { usuario, loading } = useAuth();

  if (loading) {
    // substituir por um componente de Spinner/Loading
    return <div>Carregando...</div>;
  }

  if (!usuario) {
    // Se não estiver logado, redireciona para a página de login
    return <Navigate to="/login" replace />;
  }

  // Se estiver logado, renderiza o conteúdo da rota (Outlet)
  return <Outlet />;
}