import github_img from "./assets/github.png";
import linkedin_img from "./assets/linkedin.png";
import avatar_img from "./assets/avatar_img.jpg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import javascript from "./assets/javascript.svg";
import typescript from "./assets/typescript.svg";
import python from "./assets/python.svg";
import nodejs from "./assets/nodejs.svg";
import django from "./assets/django.svg";
import typeorm from "./assets/typeorm.svg";
import prisma from "./assets/prisma.svg";
import mui from "./assets/mui.svg";
import bootstrap from "./assets/bootstrap-5.svg";
import styledComponents from "./assets/styled-components.svg";
import jwt from "./assets/jwt.svg";
import jest from "./assets/jest.svg";
import github from "./assets/github.png";
import git from "./assets/git.svg";
import postgresql from "./assets/postgresql.svg";
import sqlite from "./assets/sqlite.svg";

interface IProject {
  name: string;
  techs: string[];
  description: string;
  git_link: string;
  link_deploy?: string;
}

export const userData = {
  name: "Wendel Bueres",
  image: avatar_img,
  description:
    "Sou Analista de Sistemas, Desenvolvedor de Sistemas e Estudante na Kenzie Academy, na Kenzie Academy participei de diversos projetos resolvendo problemas de alto nível e desenvolvendo habilidades, desenvolvi esses projetos por meio de diversas tecnologias, onde desenvolvi experiência em Back-end e Front-end.",
};

export const pages = [
  {
    name: "GitHub",
    link: "https://github.com/WendelBueres/",
    image: github_img,
  },
  {
    name: "Linked-In",
    link: "https://linkedin.com/in/wendelbueres/",
    image: linkedin_img,
  },
];

export const lista = [
  { name: "HTML 5", image: html },
  { name: "CSS 3", image: css },
  { name: "JavaScript", image: javascript },
  { name: "TypeScript", image: typescript },
  { name: "Python", image: python },
  { name: "Node JS", image: nodejs },
  { name: "Django", image: django },
  { name: "Type-ORM", image: typeorm },
  { name: "Prisma", image: prisma },
  { name: "Material-UI", image: mui },
  { name: "Bootstrap 5", image: bootstrap },
  { name: "Styled-Components", image: styledComponents },
  { name: "Json Web Tokens", image: jwt },
  { name: "Jest", image: jest },
  { name: "PostgreSQL", image: postgresql },
  { name: "SQLite", image: sqlite },
  { name: "GitHub", image: github },
  { name: "Git", image: git },
];

export const projects: IProject[] = [
  {
    name: "The Cost - API",
    techs: ["Python", "Django", "Django REST Framework", "SQLite", "DRF - Spectacular"],
    description:
      "API para registro financeiros (receitas e gastos).",
    git_link: "https://github.com/WendelBueres/TheCost-API/",
  },
  {
    name: "The Cost",
    techs: ["React", "TypeScript", "Styled-Components", "Json Web Tokens"],
    description:
      "Plataforma com o objetivo de ajudar o usuário a controlar gastos financeiros.",
    git_link: "https://github.com/WendelBueres/the_cost/",
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
    git_link: "https://github.com/WendelBueres/WorkCollection/",
  },
  {
    name: "Utopic Bank",
    techs: [
      "Python",
      "Django",
      "PostgreSQL",
      "Django REST Framework",
      "DRF Spectacular",
      "Swagger-UI",
    ],
    description:
      "API para banco digital, com funcionalidade de criação de contas, cartões, lançamentos de compras, geração de faturas, operações bancárias em conta, criptografia de dados e investimento CDI com consumo de API externa da B3.",
    git_link: "https://github.com/Utopic-Digital-Bank/back-end/",
    link_deploy: "https://utopic-bank.onrender.com/api/docs/",
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
      "O CNAB Reader tem como objetivo a leitura, interpretação e formatação de informações de arquivos CNAB. O Back-end da aplicação armazena as informações em um banco de dados relacional usando o SGBD PostgreSQL.",
    git_link: "https://github.com/WendelBueres/desafio-2/",
  },
  {
    name: "K-Contacts",
    techs: [
      "React",
      "Material-UI",
      "TypeScript",
      "Prisma ORM",
      "ExpressJS",
      "JEST",
      "PostgreSQL",
    ],
    description:
      "O K-Contacts tem como objetivo armazenar contatos do usuário e renderizar de modo amigável. O Back-end da aplicação armazena as informações em um banco de dados relacional usando o SGBD PostgreSQL.",
    git_link: "https://github.com/WendelBueres/entrega-5/",
  },
];
