import Image from "next/image";

// A função de busca é executada no servidor.
async function getCurriculoData() {
  const backendUrl = 'http://localhost:3333/curriculo';
  try {
    const response = await fetch(backendUrl);
    if (!response.ok) {
      throw new Error('Falha ao buscar os dados do currículo');
    }
    return response.json();
  } catch (error) {
    console.error('Erro ao buscar dados do currículo:', error);
    return null; // Retorna null em caso de erro
  }
}

// Componentes da interface do usuário
const SectionHeader = ({ title }) => (
  <h3 className="text-xl font-semibold mb-4 mt-8 flex items-center gap-2 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 pb-2">
    {title}
  </h3>
);

const Header = ({ data }) => {
  return (
    <header className="flex flex-col items-center sm:items-start text-center sm:text-left p-8 rounded-xl shadow-lg bg-white dark:bg-gray-800">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{data.nome}</h1>
      <h2 className="text-xl font-medium text-purple-600 dark:text-purple-400 mt-1">{data.titulo}</h2>
      <div className="flex flex-col sm:flex-row sm:gap-6 mt-4 text-gray-700 dark:text-gray-300">
        <p className="flex items-center gap-2">
          📍 {data.localizacao}
        </p>
        <p className="flex items-center gap-2">
          📞 {data.telefone}
        </p>
        <p className="flex items-center gap-2">
          ✉️ {data.disponibilidade}
        </p>
      </div>
      <div className="flex gap-4 mt-2">
        <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
          LinkedIn
        </a>
      </div>
    </header>
  );
};

const About = ({ text }) => (
  <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
    <SectionHeader title="Apresentação" />
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{text}</p>
  </section>
);

const Skills = ({ skills }) => {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <SectionHeader title="Tecnologias & Skills" />
      {Object.entries(skills).map(([category, list]) => (
        <div key={category} className="mb-6">
          <h4 className="text-lg font-bold flex items-center gap-2 text-gray-800 dark:text-gray-200">
            {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
          </h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {list.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const Experience = ({ experiences }) => {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <SectionHeader title="Experiência Profissional" />
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6 pb-4 last:border-b-0 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.cargo}</h4>
          <p className="text-sm italic text-gray-500 dark:text-gray-400">{exp.periodo}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.descricao}</p>
          {exp.stack && (
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.stack.map((item, i) => (
                <span key={i} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 rounded-lg">{item}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

const Education = ({ education }) => {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <SectionHeader title="Formação Acadêmica" />
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{edu.curso}</h4>
          <p className="text-sm italic text-gray-500 dark:text-gray-400">{edu.instituicao}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{edu.periodo}</p>
        </div>
      ))}
    </section>
  );
};

const AdditionalInfo = ({ info }) => {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
      <SectionHeader title="Informações Adicionais" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.entries(info).map(([key, value]) => (
          <div key={key}>
            <p className="font-medium text-gray-800 dark:text-gray-200 capitalize">
              {key.replace(/([A-Z])/g, ' $1')}:
            </p>
            <p className="text-gray-700 dark:text-gray-300">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default async function Home() {
  const curriculo = await getCurriculoData();

  if (!curriculo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <div className="text-lg font-medium text-red-500">Não foi possível carregar os dados. Verifique se o backend está rodando.</div>
      </div>
    );
  }

  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-8 pb-20 sm:p-20">
      <main className="flex flex-col gap-8 w-full max-w-4xl row-start-2">
        <Image
          className="dark:invert mb-8"
          src="https://placehold.co/180x38/000000/FFFFFF?text=Curriculo"
          alt="Curriculo logo"
          width={180}
          height={38}
          priority
        />
        <Header data={curriculo} />
        <About text={curriculo.apresentacao} />
        <Skills skills={curriculo.tecnologias} />
        <Experience experiences={curriculo.experiencia} />
        <Education education={curriculo.formacao} />
        <AdditionalInfo info={curriculo.informacoesAdicionais} />
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm/6 text-gray-500 dark:text-gray-400 mt-16">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://placehold.co/16x16/000000/FFFFFF?text=R"
            alt="React icon"
            width={16}
            height={16}
          />
          Feito com React
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://placehold.co/16x16/000000/FFFFFF?text=T"
            alt="Tailwind icon"
            width={16}
            height={16}
          />
          Estilizado com Tailwind CSS
        </a>
      </footer>
    </div>
  );
}