import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CardProjectComponent from "./card.project.components";
import { projects } from "../utils.userData";

export default function BodyComponent() {
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
