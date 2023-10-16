import React, { useState } from 'react';
import BlogCardStyles from './BlogCardStyles';
import { Box, Button, Grid, Paper, Typography, styled } from '@mui/material';
import BlogData from '../../assets/dummyData/BlogData';
import { Person, CalendarMonth, Comment } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(2),
}));

const BlogCard = () => {
  const classes = BlogCardStyles();
  const blogData = BlogData;
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  
  return (
    <>
      <Box className={classes.blogContainer}>
        <Box className={classes.blogContent}>
          <Grid container spacing={3}>
            {blogData.map((val, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Item>
                  <Box className={classes.imageContent}>
                    <img src={val.cover} alt='' />
                  </Box>
                  <Box className={classes.textContent}>
                    <Box className={classes.flexAdminContent}>
                      <span>
                        <Person />
                        {val.type}
                      </span>
                      <span>
                        <CalendarMonth />
                        {val.date}
                      </span>
                      <span>
                        <Comment />
                        {val.comments} COMMENTS
                      </span>
                    </Box>
                    <Box className={classes.paraContent}>
                      <Typography variant='h3'>{val.title}</Typography>
                      <Typography variant='body1'>
                        {expanded ? val.desc : val.desc.slice(0, 100) + '...'}
                        {!expanded && (
                          <Button onClick={toggleExpansion}>Read More</Button>
                        )}
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default BlogCard;
