import React from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

interface BackProps {
    title: string;
}

const useStyles = makeStyles(() => ({
  backContent: {
    '& h2': {
      textTransform: 'uppercase',
      fontSize: '1rem',
      color: '#1c5f52',
    },
    '& h1': {textTransform: 'uppercase',
      fontSize: '2rem',},
  }
}));

const Back: React.FC<BackProps> = ({ title }) => {
  const classes = useStyles();  
  const location = useLocation();
  return (
    <div className={classes.backContent}>
      <h2>HOME / {location.pathname.split('/')[1]}</h2>
      <h1>{title}</h1>
    </div>
  );
};

export default Back;