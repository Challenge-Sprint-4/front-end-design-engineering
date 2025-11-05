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