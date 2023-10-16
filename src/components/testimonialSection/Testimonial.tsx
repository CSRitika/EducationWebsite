import React from 'react';
import TestimonialStyles from './TestimonialStyles';
import { Box, Typography } from '@mui/material';
import TestimonialData from '../../assets/dummyData/Testimonial';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import useResponsive from '../../helper/responsive';

const Testimonial = () => {
  const classes = TestimonialStyles();
  const testData = TestimonialData;
  const isMobile = useResponsive();

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Auto play every 5 seconds
  };

  return (
    <Box className={classes.headContainer}>
      <Typography variant='h3'>Testimonial</Typography>
      <Typography variant='body1'>What our client say about us...</Typography>
      { isMobile ? <Box className={classes.mobileTestContainer}>
        {testData.map((data, index) => (
          <Box key={index} className={classes.mobileSlideContent}>
            <Box className={classes.mobileImageContent}>
              <img src={data.image} alt={`Image ${index + 1}`} />
            </Box>
            <Box className={classes.mobileTextContent}>
              <p><FormatQuoteIcon />{data.review}<FormatQuoteIcon /></p>
              <Typography variant='h5'>{data.name}</Typography>
              <Typography variant='h6'>{data.designation}</Typography>
            </Box>
          </Box>
        ))}
      </Box> :
        <Box className={classes.testimonialContainer}>
          <Box className={classes.testimonialContent}>
            <Slider {...settings}>
              {testData.map((data, index) => (
                <Box key={index} className={classes.slideContent}>
                  <Box className={classes.imageContent}>
                    <img src={data.image} alt={`Image ${index + 1}`} />
                  </Box>
                  <Box className={classes.textContent}>
                    <Typography variant='h4'>{data.name}</Typography>
                    <Typography variant='h6'>{data.designation}</Typography>
                    <FormatQuoteIcon />
                    <p>{data.review}</p>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      }
    </Box>
  );
};

export default Testimonial;
