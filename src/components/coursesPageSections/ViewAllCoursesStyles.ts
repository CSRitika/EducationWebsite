import { makeStyles } from '@mui/styles';

const ViewAllCoursesStyles = makeStyles(() => ({
  allCoursesMainContainer: {
    margin: 0,
  },
  coursesContainer: {
    padding: '0px 20px',
    margin: '10px auto',
    width: '90%',
  },
  courseContentContainer: {
    width: '100%',
    margin: 'auto',
    marginBottom: '3rem',
  },
  categoryBox: {
    display: 'flex',
    height: '30vh',
    textAlign: 'center',
    width: '100%',
    border: '2px solid #007c89',
  },
  categoryImageBox: {
    width: '25%',
    height: '100%',
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  categoryTextBox: {
    width: '75%',
    position: 'relative',
    '& h1' :{
      marginTop: '10px',
      fontSize: '30px',
      fontWeight: '500',
      textTransform: 'uppercase',
      borderBottom: '2px solid #1d3e67',
      width: '60%',
      display: 'inline-block',
      '& svg' :{
        fontSize: '1.6rem',
        width: '1.4em',
      },
    },
    '& button': {
      position: 'absolute',
      top: '62%',
      right: '4%',
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
    },
  },
  coursesContentContainer: {
    boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
    '& div': {
      margin: '10px',
    }
  },
  gridContainer: {
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  },
  flexContainer: {
    display: 'flex',
    width: '100%',
  },
  courseTextContent: {
    width: '60%',
    textAlign: 'justify',
    '& h1': {
      fontSize: '1.8rem',
      margin: '15px',
      fontWeight: '600',
      color: '#007c89',
    },
    '& h6': {
      fontSize: '18px',
      margin: '10px 20px',
    },
    '& p': {
      fontSize: '16px',
      margin: '10px 20px',
      '& svg' :{
        verticalAlign: 'sub',
        fontSize: '1.3rem',
        marginRight: '2px',
      }
    },
  },
  courseImageContent: {
    width: '40%',
    padding: '10px',
    '& img': {
      width: '100%',
      height: '40vh',
    },
  },
  textContent: {},
  lastTextContent: {
    '& p': {
      fontSize: '16px',
      fontWeight: '500',
      textAlign: 'end',
    }
  },

  '@media screen and (max-width: 768px)': {
    coursesContainer: {
      padding: '0px',
      margin: '0px',
      width: '100%',
    },
    categoryBox: {
      width: '100%',
      border: 'none',
    },
    categoryImageBox: {
      width: '40%',
      '& img': {
        height: '25vh',
      },
    },
    categoryTextBox: {
      width: '60%',
      '& h1' :{
        fontSize: '20px',
        width: '100%',
      },
      '& button': {
        top: '62%',
        right: '0%',
        height: '40px',
        fontSize: '14px',
        textAlign: 'left', 
      },
    },
    coursesContentContainer: {
      '& div': {
        margin: '0px',
      }
    },
    
    flexContainer: {
      display: 'block',
      width: '100%',
    },
    courseTextContent: {
      width: '100%',
      '& h1': {
        fontSize: '18px',
        margin: '10px',
        fontWeight: '600',
      },
      '& h6': {
        fontSize: '16px',
        margin: '10px 20px',
      },
      '& p': {
        fontSize: '16px',
        margin: '10px 20px',
        '& svg' :{
          verticalAlign: 'sub',
          fontSize: '1.3rem',
          marginRight: '2px',
        }
      },
    },
    courseImageContent: {
      width: '100%',
    },
  },
}));

export default ViewAllCoursesStyles;


