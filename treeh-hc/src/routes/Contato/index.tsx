import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  mensagem?: string;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "nome" && /\d/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.nome.trim()) newErrors.nome = "O nome é obrigatório.";
    if (!formData.email.trim()) {
      newErrors.email = "O email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Digite um email válido.";
    }
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "A mensagem é obrigatória.";
    }

    return newErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("Enviando...");

    setTimeout(() => {
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Entre em Contato Conosco
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Preencha o formulário abaixo ou utilize nossos canais de atendimento.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 space-y-4"
        >
          <div>
            <label htmlFor="nome" className="block font-semibold text-gray-700 mb-1">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            {errors.nome && (
              <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="assunto" className="block font-semibold text-gray-700 mb-1">
              Assunto:
            </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block font-semibold text-gray-700 mb-1">
              Mensagem:
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={6}
              value={formData.mensagem}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            {errors.mensagem && (
              <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg font-semibold shadow hover:bg-blue-500 transition"
          >
            Enviar Mensagem
          </button>
        </form>

        {status && (
          <p className="text-center mt-4 font-medium text-gray-700">{status}</p>
        )}


      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-2">
          Outras Formas de Contato:
        </h3> 
        <p>
          Email: <span className="font-medium">contato@portalhc.com</span></p> 
        <p>
          Telefone: <span className="font-medium">(11) 2661-0000</span></p>
        <p>Endereço: Av. Dr. Enéas de Carvalho Aguiar, 255, Bairro: Centro, São Paulo - SP, 05403-000</p> 
      </div> 
      <div className="mt-10 text-center"> 
        <p className="text-gray-700 mb-4">
          Precisa de alguma ajuda?
        </p> 
        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"> 
          Fale com nosso HC Assistente 
        </button> 
      </div> 
    </main> 
  </div> 
  );
}
