import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import heroSectionStyles from './HeroSectionStyles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const classes = heroSectionStyles();
  return (
    <div>
      <section>
        <Box className={classes.heroContainer}>
          <Box className={classes.heroContent}>
            <Typography variant='h4'>Welcome to the Best Online Learning Platform</Typography>
            <Typography variant="h6">Lorem ipsum dolor sit amet consectetur,adipisicing elit. Molestias possimus eos beatae,
            ullam totam, error veniam, aut nihil odit sunt ducimus ratione autem.
            </Typography>
            <Box className={classes.heroButton}>
              <Button>GET START NOW<ArrowForwardIcon /></Button>
            </Box>
            <Box className={classes.heroButton}>
              <Link to="/courses">
                <Button>VIEW COURSES<ArrowForwardIcon /></Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default HeroSection;