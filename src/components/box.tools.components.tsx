import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lista } from "../utils.userData";
import CardToolsComponents from "./card.tools.components";

export default function BoxToolsComponent() {
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
