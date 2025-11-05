import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Usa o CPF como senha, conforme definido no backend
      await login(email, senha);
      
      // Redireciona para um dashboard após o login
      navigate('/dashboard'); 

    } catch (err) {
      setError("Email ou senha (CPF) inválidos.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="w-full max-w-md p-8 m-4 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Acessar Portal
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Use seu email e CPF como senha para entrar.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label 
              htmlFor="senha" 
              className="block text-sm font-medium text-gray-700 mb-2">
              Senha (CPF):
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <p className="text-sm text-center text-red-600 bg-red-100 p-3 rounded-md">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-blue-800 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          Não tem uma conta?{' '}
          <Link to="/cadastro" className="font-medium text-blue-700 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </main>
    </div>
  );
}