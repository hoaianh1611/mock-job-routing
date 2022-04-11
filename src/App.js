import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import JobCard from "./components/JobCard";
import jobs from "./jobs.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Grid, Pagination, Stack } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = {
  dark: createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: red[500],
      },
    },
  }),
  default: createTheme({
    palette: {
      mode: "light",
    },
  }),
};

function App() {
  const [page, setPage] = React.useState(1);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const limit = 5;
  const skip = page * limit - limit;
  let currentJobs = jobs.slice(skip, page * limit); // page === 1
  // let currentJobs = jobs.slice(5, 10); // page === 2
  // let currentJobs = jobs.slice(10, 15); // page === 3

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <ThemeProvider theme={prefersDarkMode ? theme.dark : theme.default}>
      <CssBaseline />
      <PrimarySearchAppBar />
      <Container maxWidth="lg" sx={{ margin: "auto" }}>
        <Grid
          container
          maxWidth="100%"
          margin={2}
          justifyItems={"center"}
          alignItems="stretch"
          spacing={4}
        >
          {currentJobs.map((job) => (
            <Grid
              key={job.id}
              item
              xs={12}
              md={6}
              lg={4}
              style={{ maxWidth: "340px" }}
            >
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
        <Stack alignItems={"center"} padding={1}>
          <Pagination
            count={Math.ceil(jobs.length / 5)}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
