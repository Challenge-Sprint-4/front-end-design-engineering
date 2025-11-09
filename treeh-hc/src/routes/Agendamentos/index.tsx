import { useState, useEffect } from 'react';
import api from '../../services/api';

interface Agendamento {
  idAgendamento: number;
  idPaciente: number;
  idProfissional: number;
  dataAgendamento: string; 
  horaAgendamento: string;
  tipoConsulta: string;
  status: string;
}

function formatarData(dataString: string) {
  try {
    return new Date(dataString).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  } catch (e) {
    return dataString; 
  }
}

export default function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function carregarAgendamentos() {
      try {
        setLoading(true);
        setError(null);
        const response = await api.get('/agendamento');
        setAgendamentos(response.data);
      } catch (err) {
        setError("Falha ao carregar agendamentos.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    carregarAgendamentos();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Gerenciamento de Agendamentos
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hora</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Paciente</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Profissional</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {agendamentos.map((ag) => (
                <tr key={ag.idAgendamento}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{formatarData(ag.dataAgendamento)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ag.horaAgendamento}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ag.tipoConsulta}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      ag.status === 'AGENDADO' ? 'bg-blue-100 text-blue-800' :
                      ag.status === 'REALIZADO' ? 'bg-green-100 text-green-800' :
                      ag.status === 'CANCELADO' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {ag.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ag.idPaciente}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ag.idProfissional}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">Editar</button>
                    <button className="text-red-600 hover:text-red-900">Cancelar</button>
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