import { makeStyles } from '@mui/styles';

const heroSectionStyles = makeStyles(() => ({
  heroContainer: {
    backgroundImage: 'url("https://www.collegenp.com/uploads/2023/01/Online-Learning.jpg")',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: 'center',
    backgroundPositionX: 'right', 
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
  },
  heroContent: {
    position: 'relative',
    fontFamily: '"Monserrat", sans-serif',
    color: '#000',
    margin: '0.625rem',
    '& h4': {
      fontWeight: '600',
      fontSize: '2rem',
      margin: '10px 20px 0 20px',
    },
    '& h6': {
      fontSize: '1rem',
      color: 'gray',
      fontWeight: '500',
      margin: '0 20px 10px 25px',
      width: '50%',
    }
  },
  heroButton: {
    margin: '10px 20px',
    width: '50%',
    '& button' :{
      fontSize: '15px',
      outline: 'none',
      width: '50%',
      fontWeight: '600',
      border: '1px solid transparent',
      borderRadius: '0px',
      height: '46px',
      color: '#000',
      backgroundColor: '#006570',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      padding: '0 18px',
      '&:hover, &:focus' : {
        color: '#ffffff',
        backgroundColor: '#006570',
        boxShadow: '0 0.5em 0.5em -0.4em var(--hover)',
        transform: 'translateY(-0.25em)',
      },
    },
    '& svg': {
      width: '16px',
      margin: '0 0 0 5px',
    }
  },
  '@media screen and (max-width: 768px)': {
    heroContainer: {
      backgroundImage: 'url("https://www.collegenp.com/uploads/2023/01/Online-Learning.jpg")',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundPositionY: 'bottom',
      backgroundPositionX: 'center', 
      top: '0',
      left: '0',
      width: '100%',
      height: '80vh',
    },
    heroContent: {
      margin: '1rem',
      textAlign: 'center',
      '& h4': {
        fontSize: '1.6rem',
        margin: '0px',
      },
      '& h6': {
        fontSize: '0.9rem',
        margin: '5px',
        width: '100%',
      }
    },
    heroButton: {
      width: '100%',
      margin: '0px',
      '& button': {
        margin: '10px',
        height: '36px',
        fontSize: '13px',
        width: '80%',
      },
    },
  }
}));

export default heroSectionStyles;