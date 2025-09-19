import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3333;

// Middleware para habilitar o CORS
app.use(cors());

// Define a interface para tipagem dos dados do currículo
interface CurriculoData {
  nome: string;
  titulo: string;
  localizacao: string;
  telefone: string;
  disponibilidade: string;
  linkedin: string;
  apresentacao: string;
  tecnologias: {
    frontEnd: string[];
    backEnd: string[];
    ferramentas: string[];
  };
  experiencia: {
    cargo: string;
    periodo: string;
    descricao: string;
    stack: string[];
  }[];
  formacao: {
    curso: string;
    instituicao: string;
    periodo: string;
  }[];
  informacoesAdicionais: {
    idiomas: string;
    interesses: string;
    portfolio: string;
  };
}

// Dados de exemplo do currículo com a tipagem da interface
const curriculoData: CurriculoData = {
  nome: "Júlio Silva",
  titulo: "Desenvolvedor Full Stack Júnior",
  localizacao: "São Paulo, Brasil",
  telefone: "(11) 98765-4321",
  disponibilidade: "Disponível para trabalho",
  linkedin: "https://www.linkedin.com/in/juliosilva",
  apresentacao: "Com dois anos de experiência em desenvolvimento de software, sou um profissional apaixonado por criar soluções eficientes e escaláveis. Possuo um sólido conhecimento em tecnologias front-end e back-end e estou sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir com projetos inovadores.",
  tecnologias: {
    frontEnd: [
      "JavaScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
    ],
    backEnd: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "SQL",
      "MongoDB",
      "RESTful APIs",
    ],
    ferramentas: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Figma",
      "Vercel",
    ],
  },
  experiencia: [
    {
      cargo: "Desenvolvedor Web Júnior",
      periodo: "Jan 2023 - Presente",
      descricao: "Desenvolvimento e manutenção de aplicações web, participando de todas as etapas do ciclo de vida do software. Trabalhei com a equipe para implementar novas funcionalidades, corrigir bugs e otimizar o desempenho da aplicação, utilizando React e Node.js.",
      stack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      cargo: "Estagiário de Desenvolvimento",
      periodo: "Jul 2022 - Dez 2022",
      descricao: "Suporte na criação de componentes de interface de usuário e integração de APIs. Colaborei em projetos internos, aprendendo sobre metodologias ágeis e boas práticas de codificação.",
      stack: ["HTML", "CSS", "JavaScript", "Python"],
    },
  ],
  formacao: [
    {
      curso: "Análise e Desenvolvimento de Sistemas",
      instituicao: "Universidade X",
      periodo: "2021 - 2023",
    },
    {
      curso: "Curso de Desenvolvimento Full Stack",
      instituicao: "Bootcamp Y",
      periodo: "2020 - 2021",
    },
  ],
  informacoesAdicionais: {
    idiomas: "Inglês (Avançado)",
    interesses: "Inteligência Artificial, UX/UI Design, Computação em Nuvem",
    portfolio: "https://www.juliosilva.dev",
  },
};

// Rota GET para o endpoint /curriculo
app.get('/curriculo', (req: Request, res: Response) => {
  res.json(curriculoData);
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
