import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

// Estado inicial do formulário
const initialState = {
  // Comum (Usuario)
  nome: '',
  cpf: '', // Será usado como senha no login
  email: '',
  telefone: '',
  dataNascimento: '', // Formato YYYY-MM-DD
  
  // Paciente
  numeroCarteirinha: '',
  tipoSanguineo: '',
  alergias: '',
  historicoMedico: '',
  peso: 0,
  altura: 0,

  // Profissional
  crm: '',
  especialidade: '',
  departamento: '',
  horarioAtendimento: '',
};

export default function Cadastro() {
  const [tipoUsuario, setTipoUsuario] = useState<'PACIENTE' | 'PROFISSIONAL'>('PACIENTE');
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) : value,
    }));
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // 1. Prepara o payload comum
    const commonPayload = {
      nome: formData.nome,
      cpf: formData.cpf,
      email: formData.email,
      telefone: formData.telefone,
      dataNascimento: formData.dataNascimento,
      tipoUsuario: tipoUsuario,
    };

    try {
      if (tipoUsuario === 'PACIENTE') {
        // 2. Monta payload do Paciente
        const pacientePayload = {
          ...commonPayload,
          numeroCarteirinha: formData.numeroCarteirinha,
          tipoSanguineo: formData.tipoSanguineo,
          alergias: formData.alergias,
          historicoMedico: formData.historicoMedico,
          peso: formData.peso,
          altura: formData.altura,
        };
        // 3. Envia para o endpoint de Paciente
        await api.post('/paciente', pacientePayload);

      } else {
        // 2. Monta payload do Profissional
        const profissionalPayload = {
          ...commonPayload,
          crm: formData.crm,
          especialidade: formData.especialidade,
          departamento: formData.departamento,
          horarioAtendimento: formData.horarioAtendimento,
        };
        // 3. Envia para o endpoint de Profissional
        await api.post('/ProfissionalSaude', profissionalPayload);
      }

      setSuccess('Cadastro realizado com sucesso! Você será redirecionado para o login.');
      setFormData(initialState); // Limpa o formulário
      
      setTimeout(() => {
        navigate('/login');
      }, 3000);

    } catch (err: any) {
      console.error(err);
      setError(err.response?.data || 'Erro ao realizar o cadastro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  // Funções de renderização dos campos
  const renderCamposComuns = () => (
    <>
      <CampoFormulario label="Nome Completo" name="nome" value={formData.nome} onChange={handleChange} required />
      <CampoFormulario label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
      <CampoFormulario label="CPF (será sua senha)" name="cpf" value={formData.cpf} onChange={handleChange} required />
      <CampoFormulario label="Telefone" name="telefone" type="tel" value={formData.telefone} onChange={handleChange} />
      <CampoFormulario label="Data de Nascimento" name="dataNascimento" type="date" value={formData.dataNascimento} onChange={handleChange} required />
    </>
  );

  const renderCamposPaciente = () => (
    <>
      <CampoFormulario label="Nº Carteirinha" name="numeroCarteirinha" value={formData.numeroCarteirinha} onChange={handleChange} />
      <CampoFormulario label="Tipo Sanguíneo" name="tipoSanguineo" value={formData.tipoSanguineo} onChange={handleChange} />
      <CampoFormulario label="Alergias" name="alergias" value={formData.alergias} onChange={handleChange} />
      <CampoFormulario label="Peso (kg)" name="peso" type="number" value={String(formData.peso)} onChange={handleChange} />
      <CampoFormulario label="Altura (m)" name="altura" type="number" step="0.01" value={String(formData.altura)} onChange={handleChange} />
      <div>
        <label htmlFor="historicoMedico" className="block text-sm font-medium text-gray-700 mb-2">
          Histórico Médico
        </label>
        <textarea
          id="historicoMedico"
          name="historicoMedico"
          rows={3}
          value={formData.historicoMedico}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );

  const renderCamposProfissional = () => (
    <>
      <CampoFormulario label="CRM" name="crm" value={formData.crm} onChange={handleChange} required />
      <CampoFormulario label="Especialidade" name="especialidade" value={formData.especialidade} onChange={handleChange} required />
      <CampoFormulario label="Departamento" name="departamento" value={formData.departamento} onChange={handleChange} />
      <CampoFormulario label="Horário de Atendimento" name="horarioAtendimento" value={formData.horarioAtendimento} onChange={handleChange} />
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <main className="w-full max-w-3xl p-8 m-4 mx-auto bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
          Crie sua Conta
        </h1>
        
        {/* Seletor de Tipo de Usuário */}
        <div className="flex justify-center mb-6 rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setTipoUsuario('PACIENTE')}
            className={`px-6 py-3 text-sm font-medium border rounded-l-lg
              ${tipoUsuario === 'PACIENTE' 
                ? 'bg-blue-800 text-white border-blue-800' 
                : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100'
              } transition-colors duration-200`}
          >
            Sou Paciente
          </button>
          <button
            type="button"
            onClick={() => setTipoUsuario('PROFISSIONAL')}
            className={`px-6 py-3 text-sm font-medium border rounded-r-lg
              ${tipoUsuario === 'PROFISSIONAL' 
                ? 'bg-blue-800 text-white border-blue-800' 
                : 'bg-white text-gray-900 border-gray-200 hover:bg-gray-100'
              } transition-colors duration-200`}
          >
            Sou Profissional
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <legend className="text-xl font-semibold text-gray-700 mb-4 col-span-1 md:col-span-2">
              Dados Pessoais
            </legend>
            {renderCamposComuns()}
          </fieldset>

          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <legend className="text-xl font-semibold text-gray-700 mb-4 col-span-1 md:col-span-2">
              Dados Específicos
            </legend>
            {tipoUsuario === 'PACIENTE' ? renderCamposPaciente() : renderCamposProfissional()}
          </fieldset>
          
          {error && (
            <p className="text-sm text-center text-red-600 bg-red-100 p-3 rounded-md">
              {error}
            </p>
          )}
          {success && (
            <p className="text-sm text-center text-green-600 bg-green-100 p-3 rounded-md">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-blue-800 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            {loading ? 'Cadastrando...' : 'Criar Conta'}
          </button>
        </form>
      </main>
    </div>
  );
}

// Componente helper para os campos do formulário
interface CampoProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  step?: string;
}

function CampoFormulario({ label, name, type = 'text', value, onChange, required = false, step }: CampoProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}{required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        step={step}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}