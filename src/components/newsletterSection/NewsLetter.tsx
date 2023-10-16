import React from 'react';
import NewsLetterStyles from './NewsLetterStyles';
import { Box, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const NewsLetter = () => {
  const classes = NewsLetterStyles();
  return (
    <div>
      <section className={classes.newsletterContainer}>
        <Box className={classes.flexContainer}>
          <Box className={classes.leftContent}>
            <Typography variant='h4'>Newsletter -Stay tune and get the latest update</Typography>
            <Typography variant='body1'>Far far away, behind the word mountains!</Typography>
          </Box>
          <Box className={classes.rightContent}>
            <Box>
              <input type='text' placeholder='Enter Email Address' />
              <SendIcon />
            </Box>
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default NewsLetter;