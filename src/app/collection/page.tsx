"use client";

import { Box } from "@mui/material";
import { useEffect } from "react";

const Collection = () => {
  fetch("https://api.spotify.com/v1/albums").then(result =>
    console.log(result)
  );
  return <Box>Welcome</Box>;
};

export default Collection;
