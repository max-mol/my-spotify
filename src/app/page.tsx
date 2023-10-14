"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const Home = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading)
    return (
      <Box textAlign="center" p="200px">
        <CircularProgress sx={{ color: "#512da8" }} />
      </Box>
    );
  if (error) return <Box>{error.message}</Box>;

  return (
    <Paper
      sx={{
        backgroundColor: "#212121",
        color: "white",
        p: "150px",
        m: "40px 150px 40px 150px",
        textAlign: "center"
      }}
    >
      <Box>Welcome to your Spotify disc collection!</Box>
      {!user && (
        <Box>
          <Box>Please sign in.</Box>
          <Button
            href="/api/auth/login"
            sx={{
              backgroundColor: "#512da8",
              color: "white",
              fontWeight: 700,
              mt: 3
            }}
          >
            Login to your Spotify account
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default Home;
