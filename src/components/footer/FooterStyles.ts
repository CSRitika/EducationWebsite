import { makeStyles } from '@mui/styles';

const FooterStyles = makeStyles(() => ({
  footerContainer: {
    backgroundColor: '#000',
    display: 'grid',
    gridTemplateColumns: '4fr 3fr 5fr 4fr',
    gridGap: '30px',
    '& h5': {
      marginBottom: '40px',
      fontWeight: '500',
      color: '#fff',
    },
  },
  logoContent: {
    margin: '10px',
    '& h2': { 
      color: '#fff'
    },
    '& h6': {
      color: '#1eb2a6',
      fontSize: '18px',
    },
    '& p': {
      color: '#a9a6a6',
      margin: '30px 0 15px 0',
      fontSize: '15px',
    },
    '& svg': {
      color: '#1eb2a6',
      marginRight: '6px',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.2)',
      },
    }
  },
  linksContent: {
    margin: '10px',
    '& ul': {
      listStyleType: 'none',
      '& li': {
        cursor: 'pointer',
        textDecoration: 'none',
        marginBottom: '20px',
        fontWeight: '500',
        color: '#1eb2a6',
        transition: 'top 0.3s',
        fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
        '&:hover': {
          transform: 'scale(1.1)',
        },
        '& a': {
          textDecoration: 'none',
        }
      },
    },
  },
  recentpostContent: {
    margin: '10px 0px',
  },
  blogItemFlexContent: {
    display: 'flex',
    width: '100%',
    marginBottom: '5px',
  },
  blogImage: {
    width: '40%',
    height: '90px',
    borderRadius: '5px',
    marginRight: '10px',
    objectFit:'cover',
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  blogText: {
    width: '60%',
    '& span': {
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontSize: '13px',
      color: '#a9a6a6',
      marginRight: '10px',
    },
    '& h6': {
      fontSize: '16px',
      fontWeight: '500',
      color: '#1eb2a6',
      cursor: 'pointer',
    }
  },
  lastContent: {
    margin: '10px',
    '& h4': {
      color: '#fff',
      marginBottom: '40px',
    },
    '& p': {
      margin: '10px 0',
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      color: '#a9a6a6',
      display: 'flex', 
      alignItems: 'center',
      '& span': {
        marginRight: '10px',
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  endLegalContainer: {
    color: '#fff',
    backgroundColor: '#000',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    '& p': {
      display: 'flex',
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      alignItems: 'center',
      color: '#a9a6a6',
      '& span': {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex', 
        '& svg': {
          color: 'red',
          height: '1.2rem',
        }
      }
    }
  },
  '@media screen and (max-width: 768px)': {
    footerContainer: {
      display: 'block',
      '& h5': {
        marginBottom: '10px',
        fontWeight: '500',
        color: '#fff',
        fontSize: '1.2rem',
      },
    },
    logoContent: {
      margin: '0px',
      textAlign: 'center',
      '& h2': { 
        fontSize: '3rem'
      },
      '& h6': {
        fontSize: '13px',
      },
      '& p': {
        fontSize: '12px',
        margin: '10px 0',
      },
    },
    linksContent: {
      textAlign: 'center',
      '& ul': {
        '& li': {
          marginBottom: '10px',
          fontSize: '15px',
        },
      },
    },
    recentpostContent: {
      textAlign: 'center',
      margin: '10px 0px',
    },
    blogText: {
      '& h6': {
        fontSize: '15px',
      }
    },
    blogImage: {
      width: '30%',
      height: '80px',
    },
    lastContent: {
      margin: '10px 10px 0px 10px',
      '& h5': {
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '1.2rem',
      },
      '& p': {
        margin: '5px 0',
        fontSize: '14px',
      },
    },
    endLegalContainer: {
      display: 'block', 
      alignItems: 'center', 
      padding: '10px',
      '& p': {
        display: 'block',
        fontSize : '0.8rem'
      }
    },
  }
  
  

}));

export default FooterStyles;
