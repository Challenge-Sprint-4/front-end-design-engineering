import { useAuth } from '../../contexts/AuthContext';

export default function Dashboard() {
  const { usuario } = useAuth(); // Adiciona hook

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bem-vindo(a)!
      </h1>
    </main>
  );
}