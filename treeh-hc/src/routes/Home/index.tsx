import LogoHC from '../../assets/logo_hc.svg';
import LogoIMREA from '../../assets/logo_imrea.svg';
import LogoPlayStore from '../../assets/googlePlay.png';
import LogoAppleStore from '../../assets/appStore.png'

const GooglePlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svgclassName="h-6 w-6 sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8" viewBox="0 0 512 512">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0L103 0l224.3 256L103 512 47 512V0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#000000"/>
  </svg>
);

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-7 sm:w-7 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9" viewBox="0 0 384 512">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.6 0 183.1 0 241.2c0 61.6 31.5 117.4 58.8 152.1 26.6 33.6 59.7 57.2 99.8 57.2 39.2 0 70.2-21.5 87.5-21.5 17.3 0 49.2 21.5 88.5 21.5 40.5 0 73.4-22.1 98.6-55.3-25.2-15.5-47.1-40.3-47.1-71zM24.8 152.9C24.8 152.9 24.8 152.9 24.8 152.9c10.2-34.6 32.3-59.2 55.2-70.2 14.8-7.2 32.1-13.1 49.3-13.1 16.4 0 33.7 5.2 47.9 14.3-12.7 8.6-24.3 20.7-34.4 34.6-12.6 17-21.5 38.3-21.5 60.3 0 5.4 1 10.8 2.2 16-16.3 1.3-32.9-2.5-48.6-11.4-15.7-8.9-29.2-22.1-37-38.9z" fill="#000000"/>
  </svg>
);

export default function Home() {
  return (
    <main className="bg-[#EAEAEA] font-sans">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="max-w-3xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
            Sua Consulta <span className="text-[#2F6AD8]">Online</span> Sem Complicações.
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600">
            Acesse, entenda e participe da sua consulta com tranquilidade.
          </p>

          <div className="flex flex-row items-center gap-6 mt-6">
            <img src={LogoHC} alt="Logo Hospital das Clínicas" className="h-12 sm:h-14 md:h-16 lg:h-20"/>
            <img src={LogoIMREA} alt="Logo IMREA" className="h-12 sm:h-14 md:h-16 lg:h-20"/>
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
          <div className="bg-[#7E7E7E] rounded-full p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10">
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

          <button className="w-full sm:w-auto mt-4 sm:mt-6 bg-[#2F6AD8] hover:brightness-90 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 text-sm sm:text-base md:text-lg lg:text-xl">
            DÚVIDAS?
          </button>
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
          <a href="#" className="flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-60 hover:bg-gray-50 transition-colors">
            <GooglePlayIcon />
            <div className="text-left">
              <span className="text-xs sm:text-sm md:text-base block">GET IT ON</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold">Google Play</span>
            </div>
          </a>

          <a href="#" className="flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-60 hover:bg-gray-50 transition-colors">
            <AppleIcon />
            <div className="text-left">
              <span className="text-xs sm:text-sm md:text-base block">Download on the</span>
              <span className="text-sm sm:text-base md:text-lg font-semibold">App Store</span>
            </div>
          </a>
        </div>
      </section>

    </main>
  );
}
