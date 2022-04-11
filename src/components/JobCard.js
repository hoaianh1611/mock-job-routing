import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Stack, Divider } from "@mui/material";

export default function JobCard({ job }) {
  return (
    <Card
      variant="contained"
      style={{ backgroundColor: "#212121" }}
      sx={{
        // height: "100%",
        // maxWidth: "340px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <CardContent>
        <Typography
          sx={{ height: 45 }}
          color="text.secondary"
          display={"flex"}
          textAlign="center"
          alignItems={"center"}
          justifyContent="center"
          textOverflow={"ellipsis"}
          gutterBottom
        >
          {job.title}
        </Typography>
        <Divider />
        <Stack
          direction="row"
          spacing={0.5}
          marginTop={1}
          marginBottom={1}
          sx={{ maxHeight: 30, width: "100%" }}
          overflow="hidden"
        >
          {job.skills.map((i) => (
            <Chip
              key={i}
              label={i}
              style={{ backgroundColor: "#d74742", fontSize: "0.5rem" }}
              size="small"
            />
          ))}
        </Stack>
        <Typography
          // color="text.secondary"
          variant="body2"
          height={90}
          style={{ display: "inline-block" }}
          paddingTop={1}
        >
          {job.description}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center", padding: "15px" }}>
        <Button
          size="small"
          variant="contained"
          style={{
            fontWeight: "540",
            backgroundColor: "#ffa726",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
