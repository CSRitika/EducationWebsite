import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';

interface BackProps {
    title: string;
    subtitle: string;
}

const useStyles = makeStyles(() => ({
  mainContainer: {
    textAlign: 'center',
    width: '100%',
    margin: '60px auto',
    '& h2': {
      color: '#000',
      fontSize: '2.4rem',
      fontWeight: '600',
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    },
  },
  headingContainer: {
    position: 'relative',
    '& h4': {
      fontWeight: '600',
      color: 'darkcyan',
      textTransform: 'uppercase',
      fontSize: '22px',
      display: 'inline-block',
      '&::before, &::after': {
        content: '""',
        display: 'inline-block',
        width: '10%',
        height: '2px',
        background: 'darkcyan',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '0',
      },
      '&::before': {
        right: '33%',
      },
      '&::after': {
        left: '33%',
      },
      '& span': {
        backgroundColor: '#fff',
      },
    },
  },
  '@media screen and (max-width: 768px)': {
    mainContainer: {
      '& h2': {
        fontSize: '2rem',
      },
      '& div': {
        '& h4': {
          fontSize: '16px',
          '&::before': {
            right: '25%',
          },
          '&::after': {
            left: '25%',
          },
        },
      },
    },
  }
}));

const HeadingSection: React.FC<BackProps> = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.headingContainer}>
        <Typography variant='h4'><span>{title}</span></Typography>
      </Box>
      <Typography variant='h2'>{subtitle}</Typography>
    </Box>
  );
};

export default HeadingSection;