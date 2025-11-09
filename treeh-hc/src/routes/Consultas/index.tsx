import { useState, useEffect } from 'react';
import api from '../../services/api';

interface Consulta {
  idConsulta: number;
  idAgendamento: number;
  dataConsulta: string; 
  diagnostico: string;
  prescricao: string;
  observacoesMedicas: string;
  examesSolicitados: string;
}

function formatarData(dataString: string) {
  try {
    return new Date(dataString).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  } catch (e) {
    return dataString;
  }
}

export default function Consultas() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function carregarConsultas() {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get('/Consulta');
        setConsultas(response.data);
      } catch (err) {
        setError("Falha ao carregar o histórico de consultas.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    carregarConsultas();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Registro de Consultas Realizadas
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Consulta</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Diagnóstico</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Agendamento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {consultas.map((consulta) => (
                <tr key={consulta.idConsulta}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{consulta.idConsulta}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatarData(consulta.dataConsulta)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate max-w-xs">{consulta.diagnostico}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{consulta.idAgendamento}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">Ver Detalhes</button>
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