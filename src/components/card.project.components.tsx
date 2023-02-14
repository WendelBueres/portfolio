import {
  Avatar,
  Chip,
  Divider,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import github from "../assets/github.png";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";

interface IProject {
  project: {
    name: string;
    techs: string[];
    description: string;
    git_link: string;
    link_deploy?: string;
  };
}

export default function CardProjectComponent({ project }: IProject) {
  const [width, setWidth] = useState<number>(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    function refreshWidth() {
      setWidth(document.documentElement.clientWidth);
    }

    window.addEventListener("resize", refreshWidth);
    return () => window.removeEventListener("resize", refreshWidth);
  }, [document.documentElement.clientWidth]);

  let moreTechs: string = "";
  return (
    <div
      key={project.name}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Lexend, sans-serif",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Divider />
      <Typography mt={3} variant="h4" fontWeight={500}>
        {project.name}
      </Typography>
      <Stack
        direction={"row"}
        spacing={0.5}
        sx={{ alignItems: "center", mt: 1, flexWrap: "wrap" }}
      >
        <Typography variant="body1">Linguagens: </Typography>
        {project.techs.map((tech: string, index: number) => {
          if (width > 500) {
            if (index < 3) {
              return <Chip key={tech} color="primary" label={tech} />;
            }
            if (index === 3) {
              moreTechs += `${tech}`;
            }
            if (index > 3 && index !== project.techs.length - 1) {
              moreTechs += `, ${tech}`;
            }
            if (index === project.techs.length - 1) {
              moreTechs += ` e ${tech}`;
              return (
                <Tooltip key={tech} title={moreTechs}>
                  <Chip color="primary" label="+" />
                </Tooltip>
              );
            }
          }
          if (width > 365 && width < 500) {
            if (index < 2) {
              return <Chip key={tech} color="primary" label={tech} />;
            }
            if (index === 2) {
              moreTechs += `${tech}`;
            }
            if (index > 2 && index !== project.techs.length - 1) {
              moreTechs += `, ${tech}`;
            }
            if (index === project.techs.length - 1) {
              moreTechs += ` e ${tech}`;
              return (
                <Tooltip key={tech} title={moreTechs}>
                  <Chip color="primary" label="+" />
                </Tooltip>
              );
            }
          }
          if (width <= 365) {
            if (index < 1) {
              return <Chip key={tech} color="primary" label={tech} />;
            }
            if (index === 1) {
              moreTechs += `${tech}`;
            }
            if (index > 1 && index !== project.techs.length - 1) {
              moreTechs += `, ${tech}`;
            }
            if (index === project.techs.length - 1) {
              moreTechs += ` e ${tech}`;
              return (
                <Tooltip key={tech} title={moreTechs}>
                  <Chip color="primary" label="+" />
                </Tooltip>
              );
            }
          }
        })}
      </Stack>
      <Typography mt={2} variant="body1">
        {project.description}
      </Typography>
      <Stack
        mt={3}
        direction={"row"}
        flexWrap={"wrap"}
        sx={{ justifyContent: { xs: "center", sm: "start", md: "start" } }}
      >
        <MenuItem
          sx={{ gap: 1 }}
          onClick={() => {
            window.open(project.git_link, "_blank");
          }}
        >
          <Avatar sx={{ width: "32px", height: "32px" }} src={github} />
          <Typography variant="body1">{"Github Code"}</Typography>
        </MenuItem>
        {project.link_deploy && (
          <MenuItem
            sx={{ gap: 1 }}
            onClick={() => {
              window.open(project.link_deploy, "_blank");
            }}
          >
            <Avatar
              sx={{
                width: "32px",
                height: "32px",
                background: "transparent",
              }}
            >
              <ScreenShareOutlinedIcon sx={{ color: "black" }} />
            </Avatar>
            <Typography variant="body1">{"Aplicação"}</Typography>
          </MenuItem>
        )}
      </Stack>
    </div>
  );
}
