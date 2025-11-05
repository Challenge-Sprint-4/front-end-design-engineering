import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="w-full max-w-md p-8 m-4 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Acessar Portal
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Use seu email e CPF como senha para entrar.
        </p>
        
        <form className="space-y-6">
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
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
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-800 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Entrar
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