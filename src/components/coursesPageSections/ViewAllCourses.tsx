import React from 'react';
import ViewAllCoursesStyles from './ViewAllCoursesStyles';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import HeadingSection from '../../common/headingSection/HeadingSection';
import OurCoursesData from '../../assets/dummyData/OurCourses';
import { CurrencyRupee, Description, AutoAwesome } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { BuyCourseDataProps, OurCoursesDataProps } from '../../types';

const ViewAllCourses = () => {
  const classes = ViewAllCoursesStyles();
  const navigate = useNavigate();

  const handleOnClickBuyCourseNow = (courseData : OurCoursesDataProps []) => {
    // Extract an array of courses with category title inside courses
    const finalCourseData: BuyCourseDataProps[] = [];
    for (const category of courseData) {
      for (const course of category.courses) {
        // Concatenate category ID and course ID to create a unique ID
        const uniqueCourseID = Number(category.id.toString() + course.id.toString());
        finalCourseData.push({
          ...course,
          category: category.title,
          id: uniqueCourseID, // Update the ID
        });
      }
    }

    // Navigate to the target route and send data as state
    navigate('/courses/buyCourses', { state: { finalCourseData }});
  };

  const formattedStartDate = (startDate: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: '2-digit',
    }).format(startDate);
  };
  
  return (
    <Box className={classes.allCoursesMainContainer}>
      <HeadingSection title='Our Courses' subtitle='Explore Our Many Courses' />
      <Box className={classes.coursesContainer}>
        {OurCoursesData?.map((category) => (
          <Box key={category.id} className={classes.courseContentContainer}>
            <Box className={classes.categoryBox}>
              <Box className={classes.categoryImageBox}>
                <img src={category.titleImage} alt={category.title} width="100%" />
              </Box>
              <Box className={classes.categoryTextBox}>
                <Typography variant="h1">
                  {category.title}<AutoAwesome />
                </Typography>
                <Button onClick={() => handleOnClickBuyCourseNow(OurCoursesData as OurCoursesDataProps[])}>
                  BUY COURSE NOW!
                </Button>
              </Box>
            </Box>
            <Box className={classes.coursesContentContainer}>
              {category?.courses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id} className={classes.gridContainer}>
                  <Box className={classes.flexContainer}>
                    <Box className={classes.courseTextContent}>
                      <Typography variant='h1'>{course.name}</Typography>
                      <Typography variant='h6'>Unlock the World of {course.name} with Our Industry Expert Professionals!</Typography>
                      <Typography variant='body1'><Description />{course.description}</Typography>
                      <Box className={classes.lastTextContent}>
                        <Divider variant="middle" />
                        <Typography variant="body2">
                        Price: <CurrencyRupee />{course.price} /per week | Starts From: {formattedStartDate(course.startDate)}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.courseImageContent}>
                      <img src={course.image} alt='' />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ViewAllCourses;