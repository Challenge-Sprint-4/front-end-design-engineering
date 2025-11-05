import { useState, useEffect } from 'react';
import api from '../../services/api';

// Interface baseada no seu ProfissionalSaude.java
interface Profissional {
  idProfissional: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  crm: string;
  especialidade: string;
  departamento: string;
  horarioAtendimento: string;
}

export default function Profissionais() {
  const [profissionais, setProfissionais] = useState<Profissional[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function carregarProfissionais() {
      try {
        setLoading(true);
        setError(null);
        // Chama o endpoint GET /ProfissionalSaude
        const response = await api.get('/ProfissionalSaude');
        setProfissionais(response.data);
      } catch (err) {
        setError("Falha ao carregar profissionais de saúde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    carregarProfissionais();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Gerenciamento de Profissionais
      </h1>

      {loading && <p className="text-center text-lg">Carregando...</p>}
      
      {error && (
        <p className="text-center text-red-600 bg-red-100 p-4 rounded-md">
          {error}
        </p>
      )}

      {!loading && !error && (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Especialidade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CRM</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {profissionais.map((profissional) => (
                <tr key={profissional.idProfissional}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{profissional.nome}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{profissional.especialidade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{profissional.crm}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{profissional.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">Editar</button>
                    <button className="text-red-600 hover:text-red-900">Deletar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}