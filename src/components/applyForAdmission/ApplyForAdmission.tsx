import React from 'react';
import ApplyForAdmissionStyles from './ForAdmissionStyles';
import { Box } from '@mui/material';

const ApplyForAdmission = () => {
  const classes = ApplyForAdmissionStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.flexContainer}>
        <Box className={classes.leftContent}>image</Box>
        <Box className={classes.rightContent}><p>text With button</p>
          <h1>Lets Get Started</h1>
        </Box>
      </Box>
    </Box>
  );
};

export default ApplyForAdmission;