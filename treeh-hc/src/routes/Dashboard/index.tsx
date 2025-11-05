import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom'; // Adiciona import

export default function Dashboard() {
  const { usuario } = useAuth();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      {/* ... h1 e p ... */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Adiciona o primeiro link */}
        <Link to="/pacientes" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Gerenciar Pacientes</h2>
          <p className="text-gray-600">Visualizar, adicionar e editar pacientes.</p>
        </Link>

      </div>
    </main>
  );
}