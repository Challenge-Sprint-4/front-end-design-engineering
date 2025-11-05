import { useState } from 'react';
import api from '../../services/api'; 
interface Paciente {
  idPaciente: number;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  dataNascimento: string; // LocalDate vem como string
  numeroCarteirinha: string;
  tipoSanguineo: string;
  alergias: string;
  peso: number;
  altura: number;
}

export default function Pacientes() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function carregarPacientes() {
      try {
        setLoading(true);
        setError(null);
        // Chama o endpoint GET /paciente do seu PacienteResource
        const response = await api.get('/paciente');
        setPacientes(response.data);
      } catch (err) {
        setError("Falha ao carregar pacientes.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    carregarPacientes();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Gerenciamento de Pacientes
      </h1>
    </main>
  );
}