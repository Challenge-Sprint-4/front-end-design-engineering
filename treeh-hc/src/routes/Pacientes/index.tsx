import { useState } from 'react';
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

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Gerenciamento de Pacientes
      </h1>
    </main>
  );
}