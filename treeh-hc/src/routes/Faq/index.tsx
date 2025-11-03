import { useState } from "react";

export default function Faq() {
 const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como acesso as minhas consultas?",
      answer:
        "Para acessar suas consultas, entre no site ou aplicativo do HC, faça login com seu usuário e senha, e clique na seção 'Minhas Consultas' para ver os detalhes de agendamentos e histórico.",
    },
    {
      question: "Onde encontro meu Registro HC?",
      answer:
        "O Registro HC está disponível na sua conta online. Após o login, acesse a seção 'Meu Registro' para visualizar ou baixar seus dados clínicos e históricos de atendimento.",
    },
    {
      question: "Por que não recebi a chave de acesso que solicitei?",
      answer:
        "Se não recebeu a chave de acesso, verifique se o número de telefone ou e-mail informado está correto. Caso esteja correto, entre em contato com o suporte do HC para reenviar a chave.",
    },
    {
      question: "Chave recebida por SMS. Qual o próximo passo?",
      answer:
        "Após receber a chave por SMS, volte ao site ou aplicativo do HC e insira a chave no campo solicitado para concluir a autenticação e ter acesso à sua conta.",
    },
    {
      question: "Como faço cadastro no site do HC?",
      answer:
        "Para se cadastrar, clique em 'Criar Conta' no site ou aplicativo, preencha seus dados pessoais, crie uma senha e siga as instruções de verificação enviadas por e-mail ou SMS.",
    },
    {
      question: "Já sou cadastrado, mas esqueci minha senha de acesso",
      answer:
        "Caso tenha esquecido a senha, clique em 'Esqueci minha senha' na página de login, informe seu e-mail ou telefone cadastrado e siga as instruções enviadas para redefinir a senha.",
    },
    {
      question: "Como utilizar o QR CODE presente no aplicativo?",
      answer:
        "Para usar o QR CODE, abra o aplicativo HC, vá até a seção 'QR CODE', selecione a opção desejada (consultas, check-in, exames) e escaneie o código disponível no local ou documento correspondente.",
    },
  ];

  const toggleFaq = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};
  return (
    <main>
      <section>
        <div className="max-w-[800px] mx-auto my-10 text-center">
          <h1 className="text-2xl font-bold mb-6">FAQ GERAL</h1>

          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 text-left">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full bg-blue-500 text-white font-semibold px-5 py-4 rounded-md cursor-pointer flex justify-between items-center transition-colors duration-300 ease-in-out hover:bg-blue-600"
              >
                {faq.question}
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              <div
                className={`mt-2 bg-white text-gray-800 px-4 py-2 rounded-md transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}

          <div className="w-full bg-blue-800 text-white font-semibold px-5 py-4 rounded-md flex justify-between items-center mt-8">
            <span>Nosso assistente está aqui para te ajudar.</span>
            <button className="bg-blue-500 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out hover:bg-blue-600">
              HC ASSISTANT
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
