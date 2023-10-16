import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OurCoursesStyles from './OurCoursesStyles';
import HeadingSection from '../../common/headingSection/HeadingSection';
import OurCoursesData from '../../assets/dummyData/OurCourses';
import { Box, Button, Divider, Grid, Paper, Typography, styled } from '@mui/material';
import { Schedule, CurrencyRupee, } from '@mui/icons-material';
import useResponsive from '../../helper/responsive';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}));

const OurCourses = () => {
  const classes = OurCoursesStyles();
  const coursesData = OurCoursesData;
  const isMobile = useResponsive();

  // Slice the coursesData to limit to 6 items
  const limitedCoursesData = coursesData.slice(0, 6);

  // Settings for the react-slick slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  const formattedStartDate = (startDate: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    }).format(startDate);
  };
  
  

  return (
    <Box className={classes.coursesContainer}>
      <HeadingSection title='Our Courses' subtitle='Our Most Recent Courses' />
      <Box className={classes.mainContainer}>
        <Slider {...sliderSettings} className={classes.slideContent}>
          {limitedCoursesData?.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className={classes.gridContainer}>
              <Item>
                <Box className={classes.imageContent}>
                  <img src={data.titleImage} alt='' />
                </Box>
                <Box className={classes.topContent}>
                  <Typography variant='h6'>
                    {data.title}
                  </Typography>
                  <Typography variant='h6'>
                    <Schedule />
                    Start&apos;s From: {formattedStartDate(data.courses[0].startDate)} 
                  </Typography>
                </Box>
                <Box className={classes.middleTextContent}>
                  <Typography variant='h4'>{data.courses[0].name}</Typography>
                  <Typography variant='body1'>{data.courses[0].description}</Typography>
                </Box>
                <Box className={classes.lastTextContent}>
                  <Divider variant="middle" />
                  <Box>
                    <Button variant="text">Details</Button>
                    <Typography variant='h6'><CurrencyRupee />{data.courses[0].price}</Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>
          ))}
        </Slider>
        <div className={classes.dotsContainer}>
          {coursesData?.map((_, index) => (
            <span
              key={index}
              className={classes.dot}
            ></span>
          ))}
        </div>
      </Box>
      <Box className={classes.exploreButtonContent}>
        <Link to="/courses"> 
          <Button>Explore More Courses</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default OurCourses;
