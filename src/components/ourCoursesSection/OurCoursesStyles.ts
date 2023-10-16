import { makeStyles } from '@mui/styles';

const OurCoursesStyles = makeStyles(() => ({
  coursesContainer: {
    margin: '0px',
    '& div': {
      '& div': {
        '& h4': {
          '& span': {
            backgroundColor: 'rgba(236, 237, 237, 1)',
          },
        },
      },
    },
  },
  mainContainer: {
    margin: 'auto 30px',
  },
  gridContainer: {
    padding: '0px 20px',
  },
  slideContent: {
    '& ul': {
      margin: '-50px -0px',
      '& li': {
        width: '25px',
        '& button': {
          background: 'darkcyan',
          borderRadius: '50%',
          '&::before': {
            fontSize: '16px',
          },
          '&:active': {
            background: '',
          }
        },
      },
    },
  },
  imageContent: {
    height: '35vh',
    width: '100%',
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  topContent: {
    backgroundColor: '#007c89',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    '& h6': {
      fontSize: '13px',
      '&:nth-child(1)': {
        textTransform: 'uppercase',
        fontSize: '15px',
        color: '#c2f1e0',
      },
      '& svg': {
        marginRight: '8px',
        verticalAlign: 'sub',
        fontSize: '1.3rem',
      },
    },
  },
  middleTextContent: {
    margin: '10px',
    height: '150px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '& h4': {
      fontSize: '20px',
      padding: '10px 0px',
      fontWeight: '600',
    },
    '& p': {
      fontSize: '16px',
    }
  },
  lastTextContent: {
    '& hr': {
      borderWidth: '1px'
    },
    '& div': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px 8px',
      '& h6': {
        fontSize: '16px',
        fontWeight: '600',
        '& svg': {
          marginRight: '2px',
          verticalAlign: 'sub',
          fontSize: '1.3rem',
        },
      },
      '& button': {
        fontWeight: '600',
        color: 'darkcyan',
        '&:hover': {
          border: '1px solid darkcyan',
          borderRadius: '0px',
          color: 'darkcyan'
        },
      },
    }
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 0rem 2rem 0rem',
  },
  dot: {
    width: '20px',
    height: '20px',
    margin: '0 5px',
    cursor: 'pointer',
  },
  exploreButtonContent: {
    width: '100%',
    margin: '10px 0 40px 0',
    textAlign: 'center',
    '& button' :{
      fontSize: '15px',
      display: 'inline-block',
      outline: 'none',
      fontWeight: '600',
      border: '1px solid transparent',
      borderRadius: '0px',
      height: '46px',
      lineHeight: '34px',
      color: '#000',
      backgroundColor: '#007c89',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      padding: '0 18px',
      '&:hover, &:focus' : {
        color: '#ffffff',
        backgroundColor: '#006570',
        boxShadow: '0 0.5em 0.5em -0.4em var(--hover)',
        transform: 'translateY(-0.25em)',
      },
    }
  },

  '@media screen and (max-width: 768px)': {
    mainContainer: {
      margin: 'auto 10px',
    },
    topContent: {
      padding: '6px',
      '& h6': {
        fontSize: '14px',
        '& svg': {
          marginRight: '6px',
          fontSize: '1.2rem',
        },
      },
    },
    dotsContainer: {
      padding: '2rem 0rem 2rem 0rem',
    },
    exploreButtonContent: {
      margin: '10px 0 30px 0',
      '& button' :{
        fontSize: '14px',
        height: '36px',
        lineHeight: '34px',
      }
    }, 
  }
}));

export default OurCoursesStyles;
