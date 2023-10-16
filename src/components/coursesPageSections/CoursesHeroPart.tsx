import React from 'react';
import CoursesStyles from './CoursesStyles';
import { Box } from '@mui/material';
import Back from '../../common/back/Back';

const CoursesHeroPart = () => {
  const classes = CoursesStyles();
  return (
    <Box className={classes.heroContainer}>
      <Box className={classes.heroContent}>
        <Back title={'Explore Courses'} />
      </Box>
    </Box>
  );
};

export default CoursesHeroPart;