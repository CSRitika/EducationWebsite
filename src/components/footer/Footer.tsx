import React from 'react';
import FooterStyles from './FooterStyles';
import { Box, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube, Favorite, Home, Phone, Email } from '@mui/icons-material/';
import BlogData from '../../assets/dummyData/BlogData';

const Footer = () => {
  const classes = FooterStyles();
  const blogData = BlogData;
  return (
    <>
      <Box className={classes.footerContainer}>
        <Box className={classes.logoContent}>
          <Typography variant="h2">ACADEMIA</Typography>
          <Typography variant="h6">ONLINE EDUCATION & LEARNING PLATFORM</Typography>
          <Typography variant='body1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga culpa ad quos animi, facere sit</Typography>
          <Facebook />
          <Instagram />
          <Twitter />
          <YouTube />
        </Box>

        <Box className={classes.linksContent}>
          <Typography variant='h5'>Quick Links</Typography>
          <ul>
            <li>About us</li>
            <li>All Courses</li>
            <li>Our Team</li>
            <li>Pricing</li>
            <li>Contact us</li>
          </ul>
        </Box>

        <Box className={classes.recentpostContent}>
          <Typography variant='h5'>Recent Post</Typography>
          {blogData.slice(0, 3).map((val) => (
            <Box className={classes.blogItemFlexContent} key={val.id}>
              <Box className={classes.blogImage}>
                <img src={val.cover} alt='' />
              </Box>
              <Box className={classes.blogText}>
                <span>
                  <label htmlFor=''>{val.type}</label>
                </span>
                <span>
                  <label htmlFor=''>{val.date}</label>
                </span>
                <Typography variant='h6'>{val.title}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box className={classes.lastContent}>
          <Typography variant='h5'>Have a Question?</Typography>
          <p>
            <span><Home /></span> 198 west 21 street, suite tower 47, mysore chennai
          </p>
          <p><span><Phone /></span>+91 6774885848</p>
          <p><span><Email /></span>example.567@gmail.com</p>
        </Box>
      </Box>

      <Box className={classes.endLegalContainer}>
        <p>Copyright @2023 All rights reserved | This Website is Made with <span><Favorite /></span>   by Ritika</p>
      </Box>
    </>
  );
};

export default Footer;