import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './globals.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx' // Importar o Provider

// Importar as páginas públicas
import Home from './routes/Home/index.tsx';
import Error from './routes/Error/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Faq from './routes/Faq/index.tsx';
import Equipe from './routes/Equipe/index.tsx';
import Tutorial from './routes/Tutorial/index.tsx';

// Importar as novas páginas
import Login from './routes/Login/index.tsx';
import Dashboard from './routes/Dashboard/index.tsx';
import Pacientes from './routes/Pacientes/index.tsx';
import ProtectedRoute from './components/Rotas/ProtectedRoute.tsx'; // Importar Rota Protegida

// Importar os novos componentes de funcionalidade
import Profissionais from './routes/Profissionais/index.tsx';
import Agendamentos from './routes/Agendamentos/index.tsx';
import Consultas from './routes/Consultas/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      // Rotas Públicas
      { path: "/", element: <Home /> },
      { path: "/contato", element: <Contato /> },
      { path: "/faq", element: <Faq /> },
      { path: "/equipe", element: <Equipe /> },
      { path: "/tutorial", element: <Tutorial /> },
      { path: "/login", element: <Login /> }, // Página de Login

      // Rotas Protegidas (Exigem Login)
      {
        element: <ProtectedRoute />, // Componente que protege as rotas filhas
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/pacientes", element: <Pacientes /> },
          { path: "/profissionais", element: <Profissionais /> },
          { path: "/agendamentos", element: <Agendamentos /> },
          { path: "/consultas", element: <Consultas /> },
        ]
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)