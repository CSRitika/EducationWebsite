import { makeStyles } from '@mui/styles';

const HeaderStyles = makeStyles(() => ({
  head : {
    padding: '20px 0',
    color: '#000',
  },
  containerFlex: {
    maxWidth: '95%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    width: '60%',
    '& h2' :{
      fontSize: '30px',
      fontWeight: '900',
    },
    '& h6': {
      fontSize: '18px',
      color: '#006570',
    },
  },
  icons: {
    width: '40%',
    textAlign: 'end',
    '& svg' : {
      height: '30px',
      marginLeft: '10px',
      cursor: 'pointer',
      width: '30px',
      color: '#006570',
      transition: '0.5s',
      borderRadius: '50%',
      '&:hover': {
        transform: 'scale(1.2)',
      },
    },
  },
  navContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: '0 30px',
  },
  navFlex: {
    display: 'flex',
    backgroundColor: '#0C090A',
    justifyContent: 'space-between',
    position: 'relative', 
    '& ul' :{
      width: '50%',
      display: 'flex',
      justifyContent: 'space-between',
      listStyleType: 'none',
      margin: '30px',
      '& li' : {
        '& a' :{
          textDecoration: 'none',
          color: '#fff',
          fontWeight: '600',
          '&:hover': {
            color: '#1eb2a6',
          },
          '&.active': {
            color: '#1eb2a6',
          },
        },
      },
    },
  },
  rightContent : {
    backgroundColor: '#006570',
    padding: '30px 70px',
    color: '#fff',
    clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)',
  },
  rightButton: {
    cursor: 'pointer',
  },
  toggleButton: {
    display: 'none',
  },
  mobileNavOpen: {
    '& ul': {
      left: '0',
    },
  },

  '@media screen and (max-width: 768px)': {
    icons: {
      width: '20%',
      '& svg' : {
        height: '26px',
        transition: '-1.5s',
      },
    },
    rightContent: {
      clipPath: 'none',
      padding: '20px 10%',
    },
    navContainer: {
      margin: '0',
      backgroundColor: '#1eb2a6',
      position: 'relative',
      width: '100%'
    },
    toggleButton: {
      cursor: 'pointer',
      display: 'block',
      backgroundColor: 'none',
      color: '#fff',
      fontSize: '30px',
      position: 'absolute',
      right: '10px',
      top: '15px',
    },
    navFlex: {
      backgroundColor: '#006570',
      zIndex: '1',
      '& ul': {
        position: 'absolute',
        margin: '30px 0px',
        top: '6vh',
        left: '-100%',
        width: '100%',
        height: 'auto',
        display: 'block',
        backgroundColor: '#006570',
        transition: 'all .5s',
        '& li': {
          margin: '10px 0px',
          '& a': {
            color: '#fff',
            margin: '10%',
            '&:hover': {
              color: '#99d5d2',
            },
            '&:active': {
              color: '#000',
            },
          }
        }
      }
    },
    mobileNavOpen: {
      '& ul': {
        left: '0',
      },
    },
  },
}));

export default HeaderStyles;
