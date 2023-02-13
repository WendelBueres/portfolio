import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Fab from "@mui/material/Fab";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function FooterComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "80px",
        width: "100%",
        background: "#5C63ED",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Fab
        size="small"
        color="inherit"
        aria-label="add"
        sx={{ mt: "-50px", mb: 1 }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <ExpandLessIcon />
      </Fab>
      <Typography sx={{ color: "white" }}>👋 Obrigado por acessar</Typography>
    </Box>
  );
}
