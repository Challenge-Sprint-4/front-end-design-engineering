import { useState } from 'react';
import LogoHC from '../../assets/logo_hc.svg';
import LogoIMREA from '../../assets/logo_imrea.svg';
import LogoApple from '../../assets/appStore.png';
import LogoPlay from '../../assets/googlePlay.png';


export default function Home() {
  const [showFaq, setShowFaq] = useState(false);

  return (
    <main className="bg-[#EAEAEA] font-sans min-h-screen overflow-x-hidden"> {/* Adicionado overflow-x-hidden e min-h-screen */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
            Sua Consulta <span className="text-[#2F6AD8]">Online</span> Sem Complicações.
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Acesse, entenda e participe da sua consulta com tranquilidade.
          </p>

          <div className="flex flex-row items-center gap-6 mt-6">
            <img 
              src={LogoHC} 
              alt="Logo Hospital das Clínicas" 
              className="h-12 sm:h-14 md:h-16 lg:h-20"
            />
            <img 
              src={LogoIMREA} 
              alt="Logo IMREA" 
              className="h-12 sm:h-14 md:h-16 lg:h-20"
            />
          </div>

          <button className="mt-6 sm:mt-10 bg-[#2F6AD8] hover:brightness-90 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 text-base sm:text-lg md:text-xl">
            ACESSAR TUTORIAL
          </button>
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800">
          Sobre a Teleconsulta
        </h2>

        <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto text-center">
          
          <h3 className="text-[#2F6AD8] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Seu Propósito</h3>
          <div className="bg-[#b1b1b1cf] rounded-full p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10">
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              A teleconsulta foi criada para democratizar o acesso à saúde, superar barreiras geográficas, reduzir custos e otimizar o acompanhamento de pacientes, especialmente em áreas remotas ou para pessoas com dificuldade de locomoção.
            </p>
          </div>

          <h3 className="text-[#2F6AD8] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4">Onde acessar</h3>
          <div className="bg-[#b1b1b1cf] rounded-full p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10">
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              Pelo Portal do Paciente HC, você pode se consultar de forma simples e acessível. Escolha um local silencioso e bem iluminado, com internet, câmera, microfone e fones de ouvido, e anote suas perguntas para o médico.
            </p>
          </div>

          <button 
            onClick={() => setShowFaq(!showFaq)}
            className="w-full sm:w-auto mt-4 sm:mt-6 bg-[#2F6AD8] hover:brightness-90 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 text-sm sm:text-base md:text-lg lg:text-xl"
          >
            {showFaq ? 'FECHAR DÚVIDAS' : 'DÚVIDAS?'}
          </button>
          
          {showFaq && (
            <div className="mt-6 sm:mt-8 md:mt-10 text-left p-4 sm:p-6 bg-gray-100 rounded-2xl">
              <h4 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">Perguntas Frequentes</h4>
              
              <div className="mb-3">
                <p className="font-semibold text-gray-700">1. Como acesso a consulta?</p>
                <p className="text-gray-600 text-sm sm:text-base">Você receberá um link por e-mail ou SMS no dia. Basta clicar nele no horário agendado e aguardar o médico na sala virtual.</p>
              </div>
              
              <div className="mb-3">
                <p className="font-semibold text-gray-700">2. Preciso baixar o aplicativo?</p>
                <p className="text-gray-600 text-sm sm:text-base">Sim, a consulta ocorre de forma mais estável dentro do aplicativo "Portal do Paciente HC". Recomendamos que o baixe antes da consulta.</p>
              </div>

              <div>
                <p className="font-semibold text-gray-700">3. A consulta é gravada?</p>
                <p className="text-gray-600 text-sm sm:text-base">Não. Seguindo as normas de privacidade e sigilo médico, as teleconsultas não são gravadas.</p>
              </div>
            </div>
          )}

        </div>
      </section>
      <section className="text-center py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800">
          Baixe o Aplicativo
        </h2>
        <p className="max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
          Para sua consulta online, baixe o aplicativo Portal do Paciente HC no celular. Por lá, você pode ver a data e horário da consulta, acessar o link da sala e conversar com o profissional de saúde. É fácil, grátis e seguro.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
          <a 
            href="https://play.google.com/store/apps/details?id=com.netihc.portaldopaciente" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform transform hover:scale-105"
          >
            <img 
              src={LogoPlay} 
              alt="Disponível no Google Play" 
              className="h-12 sm:h-14 md:h-16 rounded-lg" 
            />
          </a>

          <a 
            href="https://apps.apple.com/br/app/portal-do-paciente-hc/id1572694502" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-transform transform hover:scale-105"
          >
            <img 
              src={LogoApple} 
              alt="Baixar na App Store" 
              className="h-12 sm:h-14 md:h-16 rounded-lg" 
            />
          </a>
          
        </div>
      </section>

    </main>
  );
}

