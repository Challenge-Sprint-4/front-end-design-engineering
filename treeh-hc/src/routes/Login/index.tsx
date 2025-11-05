import { useState } from 'react'; // Adiciona import
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState(''); // Adiciona estado
  const [senha, setSenha] = useState(''); // Adiciona estado
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <main className="w-full max-w-md p-8 m-4 bg-white shadow-xl rounded-lg">
        {/* ... h1 e p ... */}
        
        <form className="space-y-6">
          <div>
            {/* ... label email ... */}
            <input
              type="email"
              id="email"
              value={email} // Adiciona value
              onChange={(e) => setEmail(e.target.value)} // Adiciona onChange
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            {/* ... label senha ... */}
            <input
              type="password"
              id="senha"
              value={senha} // Adiciona value
              onChange={(e) => setSenha(e.target.value)} // Adiciona onChange
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
        
        {/* ... link cadastro ... */}
      </main>
    </div>
  );
}