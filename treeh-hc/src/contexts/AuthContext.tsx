import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
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
    // Tenta carregar dados do usuário do localStorage ao iniciar
    const storedUser = localStorage.getItem('@AppHC:usuario');
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ usuario, loading }}>
      {children}
    </AuthContext.Provider>
  );
}