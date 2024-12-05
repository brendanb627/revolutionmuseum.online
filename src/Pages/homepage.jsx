import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#333",
      paper: "#444",
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
    },
  },
});

export const HomePage = () => {
  return (
    <Box className="homepage1" sx={{ padding: 0, textAlign: "left" }}>
      <Box gutterBottom className="App-header">
        <Box className="App-logo" gutterBottom>
          The different POVs of American History
        </Box>
        <Box className='App-text'><span className="redGradient">Revolution</span>{" "}
        <span className="blueGradient">Museum</span></Box>
        <Box className='App-textlogo'><img src="logo.png" width={50}></img></Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "left" }}
      >
        {/* First Row with 3 Boxes */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "99vw",
            marginBottom: 3,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#21262a;",
              border: "0px solid #55A",
              borderRadius: 2,
              margin: 2,
              padding: 3,
              width: "30vw",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.567)",
            }}
          >
            <Typography variant="h4" sx={{ color: "#fff", fontWeight: 600 }}>
              <span className="redGradient">Patriots</span>{" "}
            </Typography>
            <Typography variant="body2">
              Learn about their view on the American Revolution through
              different primary sources
            </Typography>
            <Link to={`/patriots`}>
              <Button variant="contained" sx={{ marginTop: 1 }}>
                Go to page
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "#21262a;",
              border: "0px solid #55A",
              borderRadius: 2,
              margin: 2,
              padding: 3,
              width: "30vw",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.567)",
            }}
          >
            <Typography variant="h4" sx={{ color: "#F5F", fontWeight: 600 }}>
              <span className="yellowGradient">Native Americans</span>
            </Typography>
            <Typography variant="body2" sx={{ color: "#fff" }}>
              Learn about their view on the American Revolution through
              different primary sources
            </Typography>
            <Link to={`/native-americans`}>
              <Button variant="contained" sx={{ marginTop: 1 }}>
                Go to page
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "#21262a;",
              border: "0px solid #55A",
              borderRadius: 2,
              margin: 2,
              padding: 3,
              width: "30vw",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.567)",
            }}
          >
            <Typography variant="h4" sx={{ color: "#fff", fontWeight: 600 }}>
              <span className="blueGradient">Loyalists</span>{" "}
            </Typography>
            <Typography variant="body2">
              Learn about their view on the American Revolution through
              different primary sources
            </Typography>
            <Link to={`/loyalists`}>
              <Button variant="contained" sx={{ marginTop: 1 }}>
                Go to page
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Second Row with 2 Boxes */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "99vw",
            marginBottom: 3,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#21262a",
              border: "0px solid #55A",
              borderRadius: 2,
              margin: 2,
              padding: 3,
              width: "47vw",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.567)",
            }}
          >
            <Typography variant="h4" sx={{ color: "#F5F", fontWeight: 600 }}>
              <span className="redGradient">Anti-Federalists</span>{" "}
            </Typography>
            <Typography variant="body2">
              Learn about the Anti-Federalist POV through different primary
              sources
            </Typography>
            <Link to={`/not-finished`}>
              <Button variant="contained" sx={{ marginTop: 1 }}>
                Go to Page
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "#21262a",
              border: "0px solid #55A",
              borderRadius: 2,
              margin: 2,
              padding: 3,
              width: "47vw",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.567)",
            }}
          >
            <Typography variant="h4" sx={{ color: "#F5F", fontWeight: 600 }}>
              <span className="blueGradient">Federalists</span>{" "}
            </Typography>
            <Typography variant="body2">
              Learn about the Federalist POV through different primary sources
            </Typography>
            <Link to={`/federalists`}>
              <Button variant="contained" sx={{ marginTop: 1 }}>
                Go to Page
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Third Row with 2 Boxes */}
        <Box sx={{ display: "flex", justifyContent: "center", width: "99vw" }}>
          <Box
            sx={{
              backgroundColor: "#21262a",
              border: "0px solid #55A",
              borderRadius: 2,
              margin: 2,
              padding: 3,
              width: "47vw",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.567)",
            }}
          >
            <Typography variant="h4" sx={{ color: "#F5F", fontWeight: 600 }}>
            <span className="yellowGradient">Anti-Abolitionists</span>
            </Typography>
            <Typography variant="body2">
              This is unfinished
            </Typography>
            <Link to={`/not-finished`}>
              <Button variant="contained" sx={{ marginTop: 1 }}>
                Go to Page
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              backgroundColor: "#21262a",
              border: "0px solid #55A",
              borderRadius: 2,
              margin: 2,
              padding: 3,
              width: "47vw",
              boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.567)",
            }}
          >
            <Typography variant="h4" sx={{ color: "#F5F", fontWeight: 600 }}>
            <span className="yellowGradient">Abolitionists</span>
            </Typography>
            <Typography variant="body2">
              Learn about the abolitionist POV through different primary sources
            </Typography>
            <Link to={`/abolitionists`}>
              <Button variant="contained" sx={{ marginTop: 1 }}>
                Go to Page
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
