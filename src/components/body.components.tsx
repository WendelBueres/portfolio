import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CardProjectComponent from "./card.project.components";

interface IProject {
  name: string;
  techs: string[];
  description: string;
  git_link: string;
  link_deploy?: string;
}

export default function BodyComponent() {
  const projects: IProject[] = [
    {
      name: "The Cost",
      techs: ["React", "TypeScript", "Styled-Components", "Json Web Tokens"],
      description:
        "Plataforma com o objetivo de ajudar o usuário a controlar gastos financeiros.",
      git_link: "https://github.com/WendelBueres/the_cost",
      link_deploy: "https://the-cost-rj53-9icpb69uk-wendelbueres.vercel.app/",
    },
    {
      name: "WorkCollection",
      techs: [
        "TypeScript",
        "Type-ORM",
        "PostgreSQL",
        "ExpressJS",
        "Jest",
        "Json Web Tokens",
      ],
      description: "API para solução de registro e divulgação de projetos.",
      git_link: "https://github.com/WendelBueres/WorkCollection",
    },
    {
      name: "Utopic Bank",
      techs: ["Python", "Django", "Django REST Framework", "DRF Spectacular"],
      description:
        "API para banco digital, com funcionalidade de criação de contas, cartões, lançamentos de compras, geração de faturas, operações bancarias em conta, criptografia de dados e investimento CDI com consumo de API externa da B3.",
      git_link: "https://github.com/Utopic-Digital-Bank/back-end",
      link_deploy: "https://utopic-bank.onrender.com",
    },
    {
      name: "CNAB Reader",
      techs: [
        "React",
        "Material-UI",
        "JavaScript",
        "Python",
        "Django",
        "Django REST Framework",
        "DRF Spectacular",
        "PostgreSQL",
      ],
      description:
        "O CNAB Reader tem como tem como objetivo a leitura, interpretação, formatação de informações de arquivo CNAB. O Back-end da aplicação armazena as informações em um banco de dados relacional usando o SGBD PostgreSQL.",
      git_link: "https://github.com/WendelBueres/desafio-2",
    },
    {
      name: "K-Contacts",
      techs: ["React", "Material-UI", "TypeScript", "Prisma ORM", "PostgreSQL"],
      description:
        "O K-Contacts tem como objetivo armazenar contatos do usuário e renderizar de modo amigável. O Back-end da aplicação armazena as informações em um banco de dados relacional usando o SGBD PostgreSQL.",
      git_link: "https://github.com/WendelBueres/entrega-5",
    },
  ];

  return (
    <Container
      sx={{
        display: "flex",
        textAlign: "start",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        mt: 5,
        mb: 8,
        background: "white",
      }}
    >
      <Container
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "35%" },
        }}
      >
        <h4>Vamos trocar uma ideia?</h4>
        <p>
          No LinkedIn sempre estou compartilhando meus processos diários para
          desenvolver esses projetos e estou disposto a trocar algumas ideias
          por lá
        </p>
        <Button
          href="https://www.linkedin.com/in/wendelbueres"
          target="_blank"
          variant="contained"
        >
          Acesse meu perfil no LinkedIn
        </Button>
      </Container>
      <Container
        sx={{
          flexDirection: "column",
          width: { xs: "100%", sm: "100%", md: "65%" },
        }}
      >
        <h5>Projetos</h5>
        <h2>
          Originalidade e <span style={{ color: "blue" }}>dedicação</span> em
          cada detalhe
        </h2>
        {projects.map((project) => (
          <CardProjectComponent key={project.name} project={project} />
        ))}
      </Container>
    </Container>
  );
}
