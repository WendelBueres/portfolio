import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import dots from "../assets/dots.png";

export default function BoxComponent() {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignItems={"start"}
      justifyContent={"space-around"}
      sx={{ height: "590px", width: "100%", background: "#5C63ED" }}
    >
      <Container>
        <Typography
          variant="h3"
          maxWidth={"596px"}
          fontWeight="700"
          textAlign={"start"}
          sx={{
            color: "white",
            fontSize: { xs: "32px", sm: "32px", md: "44px" },
          }}
        >
          Criando experiências por meio da tecnologia
        </Typography>
        <Typography
          variant="body1"
          maxWidth={"550px"}
          mt={"24px"}
          fontWeight="400"
          fontFamily={"Inter"}
          fontSize="16px"
          textAlign={"start"}
          sx={{ color: "white", mr: "0px" }}
        >
          Sou estudante de programação na Kenzie Academy Brasil, participei de
          diversos projetos resolvendo problemas de alto nível e desenvolvendo
          habilidades
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "end",
          mr: "80px",
        }}
      >
        <img src={dots} alt="" />
      </Container>
    </Box>
  );
}
