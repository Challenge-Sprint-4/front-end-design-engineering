import martinsImg from "../../assets/martins-img.jpg";
import henriqueImg from "../../assets/henrique-img.jpg";


export default function Equipe() {
  const membros = [
    {
      nome: "Henrique Martins",
      titulo: "1TDSPF",
      rm: "563620",
      descricao:
        "Gosto de aprender e desenvolver tecnologias novas, seja qual for o seu objetivo, estou sempre disposto a aprender e a crescer.",
      foto: martinsImg,
      linkedin: "https://www.linkedin.com/in/hrqmartins/",
      github: "https://github.com/hrqmartins",
    },
    {
      nome: "Henrique Teixeira",
      titulo: "1TDSPF",
      rm: "563088",
      descricao:
        "Gosto de aprender e desenvolver tecnologias novas, seja qual for o seu objetivo, estou sempre disposto a aprender e a crescer.",
      foto: henriqueImg,
      linkedin: "https://www.linkedin.com/in/henriquecesarr/",
      github: "https://github.com/HenriqueTCesar",
    },
  ];
  return (
    <main className="bg-gray-100 font-sans">
      <section className="mx-auto max-w-6xl py-20 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Nossa Equipe
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça os profissionais talentosos que tornam nossos projetos
            realidade. Uma equipe dedicada e experiente, pronta para superar
            desafios.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-10">
          {membros.map((membro, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-27px)] max-w-sm"
            >
              <div className="w-full h-1 border-t-4 border-transparent group-hover:border-blue-600 transition-colors duration-300 absolute top-0 left-0 rounded-t-lg"></div>

              <img
                src={membro.foto}
                alt={`${membro.nome} Foto`}
                className="w-[120px] h-[120px] rounded-full object-cover mx-auto mb-5 border-4 border-gray-200 transition-all duration-300 group-hover:border-blue-500 group-hover:scale-105"
              />
              <h3 className="text-xl font-bold text-slate-800 mb-1">
                {membro.nome}
              </h3>
              <p className="text-blue-500 font-semibold mb-2">
                {membro.titulo}
              </p>
              <p className="text-sm text-gray-500 mb-4">RM: {membro.rm}</p>
              <p className="text-gray-600 mb-6 text-sm">{membro.descricao}</p>

              <div className="flex justify-center items-center gap-3">
                <a
                  href={membro.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center gap-2 py-2 px-4 rounded-full bg-gray-100 text-gray-600 text-sm font-medium transition-all duration-300 hover:bg-[#0077b5] hover:text-white hover:-translate-y-0.5"
                >
                  <i className="fa-brands fa-linkedin text-lg"></i>
                  <span>LinkedIn</span>
                </a>
                <a
                  href={membro.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center gap-2 py-2 px-4 rounded-full bg-gray-100 text-gray-600 text-sm font-medium transition-all duration-300 hover:bg-gray-800 hover:text-white hover:-translate-y-0.5"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}