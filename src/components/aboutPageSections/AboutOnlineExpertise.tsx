import React from 'react';
import AboutOnlineExpertiseStyles from './AboutOnlineStyles';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import LearnAnythingImage from '../../assets/images/LearnAnythng.jpg';
import LearningExpertiseData from '../../assets/dummyData/LearningExpertiseData';

const AboutOnlineLearningExpertise = () => {
  const classes = AboutOnlineExpertiseStyles();
  return (
    <Box className={classes.learnAnythingContainer}>
      <Box className={classes.containerFlex}>
        <Box className={classes.leftRow}>
          <Typography variant='h6'>LEARN ANYTHING</Typography>
          <Typography variant='h3'>Why You Should Start Learning with Us?.</Typography>
          <Box className={classes.cardContainer}>
            {LearningExpertiseData.map((item, index) => (
              <Card key={index} sx={{ display: 'flex', marginBottom: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={item.image}
                  alt={`${item.tittle} album cover`}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                      {item.tittle}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
        <Box className={classes.rightRow}>
          <img src={LearnAnythingImage} alt='Learn Anything' height={'100%'} width={'100%'}/>
        </Box>
      </Box>
    </Box>
  );
};  

export default AboutOnlineLearningExpertise;