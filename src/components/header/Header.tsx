import React from 'react';
import Navbar from './Navbar';
import HeaderStyles from './HeaderStyles';
import { Box, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material/';

const Header = () => {
  const classes = HeaderStyles();

  return (
    <>
      <section className={classes.head}>
        <Box className={classes.containerFlex}>
          <Box className={classes.logo}>
            <Typography variant="h2">ACADEMIA</Typography>
            <Typography variant="h6">ONLINE EDUCATION & LEARNING PLATFORM</Typography>
          </Box>

          <Box className={classes.icons}>
            <Facebook />
            <Instagram />
            <Twitter />
            <YouTube />
          </Box>
        </Box>
      </section>
      <Navbar />
    </>
  );
};

export default Header;