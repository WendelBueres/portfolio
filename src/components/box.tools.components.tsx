import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import python from "../assets/python.svg";
import nodejs from "../assets/nodejs.svg";
import django from "../assets/django.svg";
import typeorm from "../assets/typeorm.svg";
import prisma from "../assets/prisma.svg";
import mui from "../assets/mui.svg";
import bootstrap from "../assets/bootstrap-5.svg";
import styledComponents from "../assets/styled-components.svg";
import jwt from "../assets/jwt.svg";
import jest from "../assets/jest.svg";
import github from "../assets/github.png";
import git from "../assets/git.svg";
import postgresql from "../assets/postgresql.svg";
import sqlite from "../assets/sqlite.svg";
import CardToolsComponents from "./card.tools.components";

export default function BoxToolsComponent() {
  const lista = [
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
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"start"}
      justifyContent={"space-around"}
      sx={{ pb: 9, height: "400px", width: "100%", background: "#F1F3F5" }}
    >
      <Container>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "24px",
            textAlign: "start",
            mt: 9,
            mb: 5,
          }}
        >
          Ferramentas que domino
        </Typography>
        <Container
          sx={{
            display: "flex",
            gap: 4,
            overflow: "auto",
            pb: 2,
          }}
        >
          {lista.map((e) => (
            <CardToolsComponents key={e.name} name={e.name} image={e.image} />
          ))}
        </Container>
      </Container>
    </Box>
  );
}
