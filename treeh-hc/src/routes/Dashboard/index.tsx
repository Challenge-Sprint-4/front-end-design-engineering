import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
  const { usuario } = useAuth();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bem-vindo(a), {usuario?.nome}!
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Você está logado como: <strong>{usuario?.tipoUsuario}</strong>
      </p>

      {/* Adiciona o container do grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Links entrarão aqui */}
      </div>
    </main>
  );
}