import { Card, CardMedia, Tooltip } from "@mui/material";

interface IChildren {
  name: string;
  image: string;
}

export default function CardToolsComponents({ name, image }: IChildren) {
  return (
    <Tooltip arrow contextMenu="null" placement="top" title={<h2>{name}</h2>}>
      <Card
        sx={{
          minWidth: 130,
          padding: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
        }}
      >
        <CardMedia
          sx={{
            overflow: "visible",
            objectFit: "contain",
            minWidth: "100",
            pointerEvents: "none",
            userSelect: "none",
          }}
          component="img"
          image={image}
        />
      </Card>
    </Tooltip>
  );
}
