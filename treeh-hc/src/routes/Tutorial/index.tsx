import { useState } from 'react';

import passo1Image from '../../assets/passo1.png';
import passo2Image from '../../assets/passo2.png';
import passo3Image from '../../assets/passo3.png';
import passo4Image from '../../assets/passo4.png';
import passo5Image from '../../assets/passo5.png';
import passo6Image from '../../assets/passo6.png';
import passo7Image from '../../assets/passo7.png';
import passo8Image from '../../assets/passo8.png';
import passo9Image from '../../assets/passo9.png';
import passo10Image from '../../assets/passo10.png';


const tutorialSteps = [
  {
    title: 'Passo 1: Baixe o aplicativo',
    content: 'Vá até a loja do seu celular (Play Store ou App Store) e procure por "Portal do Paciente HC".',
    image: passo1Image, 
  },
  {
    title: 'Passo 2: Crie seu cadastro',
    content: 'Abra o aplicativo e siga as instruções para criar sua conta, preenchendo seus dados pessoais.',
    image: passo2Image, 
  },
  {
    title: 'Passo 3: Faça login',
    content: 'Após o cadastro, use seu CPF e a senha criada para entrar no aplicativo.',
    image: passo3Image,
  },
  {
    title: 'Passo 4: Verifique sua agenda',
    content: 'Na tela principal, localize a opção "Agenda" para ver seus próximos agendamentos.',
    image: passo4Image,
  },
  {
    title: 'Passo 5: Agendamentos futuros',
    content: 'Dentro da agenda, você verá a lista de suas consultas marcadas, tanto presenciais quanto por teleconsulta.',
    image: passo5Image,
  },
  {
    title: 'Passo 6: Preparando para a teleconsulta',
    content: 'Antes da consulta, verifique se sua conexão com a internet está estável e se a câmera e o microfone do seu celular estão funcionando.',
    image: passo6Image,
  },
  {
    title: 'Passo 7: Acesse a sala de teleconsulta',
    content: 'No dia e horário marcados, clique no botão "Entrar na Teleconsulta" que estará disponível na sua agenda.',
    image: passo7Image,
  },
  {
    title: 'Passo 8: Conectando com o profissional',
    content: 'O aplicativo irá conectar você com o médico ou profissional de saúde para iniciar a chamada de vídeo.',
    image: passo8Image,
  },
  {
    title: 'Passo 9: Durante a consulta',
    content: 'Aproveite a consulta para tirar suas dúvidas e receber as orientações necessárias.',
    image: passo9Image,
  },
  {
    title: 'Passo 10: Fim da consulta',
    content: 'Ao final, o profissional irá encerrar a chamada e você poderá visualizar o resumo da consulta em seu prontuário eletrônico.',
    image: passo10Image,
  },
];

export default function Tutorial() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = tutorialSteps[currentStep];

  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-lg w-full text-center border-t-4 border-orange-500">
        
        <h1 className="text-xl sm:text-2xl font-extrabold mb-8 text-gray-800 leading-tight">
          Tutorial Interativo de Teleconsulta (HC)
        </h1>

        <div className="mb-8 p-4 rounded-lg bg-indigo-50/50 border border-indigo-100">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-indigo-700">
            {currentStepData.title}
          </h2>
          <p className="text-gray-600 mb-6 px-2">
            {currentStepData.content}
          </p>
          
          {currentStepData.image && (
            <img 
              src={currentStepData.image} 
              alt={currentStepData.title} 
              className="mx-auto my-6 w-1/2 max-w-[200px] object-contain rounded-xl shadow-lg border-4 border-gray-900" 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://placehold.co/200x400/CCCCCC/666666?text=Imagem+Indisponível';
              }}
            />
          )}
        </div>

        {currentStep < tutorialSteps.length - 1 && (
          <button
            onClick={handleNext}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Clique para o próximo passo
          </button>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-200 space-y-4 sm:space-y-0">
          
          {currentStep > 0 ? (
            <button
              onClick={handlePrev}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full transition-colors duration-200"
            >
              ← Voltar
            </button>
          ) : (
            <div className="w-80px h-10"></div>
          )}
          
          {currentStep < tutorialSteps.length - 1 ? (
            <span className="text-md font-semibold text-indigo-500 bg-indigo-50 px-4 py-2 rounded-lg shadow-inner">
              Passo {currentStep + 1} de {tutorialSteps.length}
            </span>
          ) : (
            <span className="text-lg font-extrabold text-green-600 animate-pulse">
              ✅ Tutorial Concluído!
            </span>
          )}

          <div className="w-80px h-10"></div> 
        </div>
      </div>
    </main>
  );
}
