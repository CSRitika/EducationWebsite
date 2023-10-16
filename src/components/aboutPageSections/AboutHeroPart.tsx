import React from 'react';
import AboutStyles from './AboutStyles';
import { Box } from '@mui/material';
import Back from '../../common/back/Back';

const AboutHeroPart = () => {
  const classes = AboutStyles();
  return (
    <Box className={classes.heroContainer}>
      <Box className={classes.heroContent}>
        <Back title={'About Us'} />
      </Box>
    </Box>
  );
};

export default AboutHeroPart;