'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Box from '@mui/material/Box';

const Home = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>{error.message}</Box>;

  if (user) {
    return (
      <Box>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Box>
    );
  }
};

export default Home;
