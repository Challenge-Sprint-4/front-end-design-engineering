import { createContext, useState, useEffect, type ReactNode, useContext } from 'react';
import api from '../services/api';

// Interface para os dados do usuário que virão do backend
interface Usuario {
  idUsuario: number;
  nome: string;
  email: string;
  tipoUsuario: 'PACIENTE' | 'PROFISSIONAL';
}

// Interface para os dados do contexto
interface AuthContextData {
  usuario: Usuario | null;
  loading: boolean;
  login(email: string, senha: string): Promise<void>;
  logout(): void;
}

// Interface para o Provedor
interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const storedUser = localStorage.getItem('@AppHC:usuario');
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  async function login(email: string, senha: string) {
    try {
      const response = await api.post('/login', { email, senha });
      const usuarioLogado: Usuario = response.data;

      setUsuario(usuarioLogado);
      localStorage.setItem('@AppHC:usuario', JSON.stringify(usuarioLogado));

    } catch (error) {
      console.error("Erro no login:", error);
      throw new Error("Falha ao fazer login. Verifique suas credenciais.");
    }
  }

  function logout() {
    setUsuario(null);
    localStorage.removeItem('@AppHC:usuario');
  }

  return (
    <AuthContext.Provider value={{ usuario, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook 
export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}