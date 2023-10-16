import React from 'react';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';
import CartCardsStyles from './BuyCourseStyles';
import HeadingSection from '../../common/headingSection/HeadingSection';
import OurCoursesData from '../../assets/dummyData/OurCourses';
import  { CurrencyRupee } from '@mui/icons-material';
import cartImage from '../../assets/images/cartImage.png';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BuyCourseDataProps, ParticularCourseProps } from '../../types';
import { AddToCart } from '../../redux/actions/action';

const BuyCourse = () => {
  const classes = CartCardsStyles();
  const location = useLocation();
  const finalCourseData  = location.state?.finalCourseData || [];
  console.log(finalCourseData);

  const dispatch = useDispatch();

  const sendCartData = (course: ParticularCourseProps) => {
    const matchingData = finalCourseData?.find((data:BuyCourseDataProps) => data.name === course.name);
    dispatch(AddToCart(matchingData));
  };

  const formattedStartDate = (startDate: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    }).format(startDate);
  };

  return (
    <Box className={classes.cartCardMainContainer}>
      <Box className={classes.cartCardHeadContainer}>
        <HeadingSection title='Buy Courses' subtitle='You Can Buy Many Courses'/>
      </Box>
      <Box className={classes.cartCardBoxContainer}>
        {OurCoursesData?.map((category) => (
          <Box key={category.id}>
            <Typography variant="h2" gutterBottom>
              {category.title}
            </Typography>
            <Grid container spacing={0} className={classes.courseContainer}>
              {category?.courses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id} style={{padding: '20px'}}>
                  <Paper elevation={3} className={classes.courseItem}>
                    <img src={course.image} alt={course.name} width="100%" />
                    <Typography variant="h1">
                      {course.name}
                    </Typography>
                    <Divider variant="middle" />
                    <Typography variant="h6" >
                      Price:<CurrencyRupee />{course.price} per week | Starts From: {formattedStartDate(course.startDate)}
                    </Typography>
                    <Button onClick={() => sendCartData(course)}>Add to Cart<img src={cartImage} alt='cart image' /></Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BuyCourse;