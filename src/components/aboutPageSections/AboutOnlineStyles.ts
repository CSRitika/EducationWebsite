import { makeStyles } from '@mui/styles';

const AboutOnlineExpertiseStyles = makeStyles(() => ({
  learnAnythingContainer: {
    backgroundImage: 'url("https://img.freepik.com/free-vector/blurred-bokeh-pattern-wallpaper-soft-touch-your-walls_1017-43483.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  containerFlex: {
    width: '100%',
    display: 'flex',
  },
  leftRow: {
    width: '50%',
    padding: '10px 20px',
    margin: '10px 0',
    '& h6': {
      color: '#1eb2a6'
    },
    '& h3': {
      fontSize: '2.5rem',
      fontWeight: '600',

    },
  },
  rightRow: {
    width: '50%',
    margin: '4rem',
    '& img': {
      borderRadius: '40% 0 50%',
    }
  },
  cardContainer: {
    margin: '10px 0px',
    '& div': {
      '&:hover': {
        backgroundColor: '#1eb2a6',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  },
  '@media screen and (max-width: 768px)': {
    containerFlex: {
      width: '100%',
      display: 'block',
    },
    rightRow: {
      display: 'none',
    },
    leftRow: {
      width: '100%',
      textAlign: 'center',
      margin: '0',
      padding: '0',
      '& h3': {
        fontSize: '2rem',
      }
    },
    cardContainer: {
      margin: '0px',
      padding: '20px'
    },
  }
}));

export default AboutOnlineExpertiseStyles;
