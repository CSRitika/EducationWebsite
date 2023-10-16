import { makeStyles } from '@mui/styles';

const TestimonialStyles = makeStyles(() => ({
  headContainer: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    '& h3': {
      fontSize: '3rem',
    },
    '& p': {
      color: 'darkcyan',
      textTransform: 'uppercase',
    },
  },
  testimonialContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  testimonialContent: {
    position: 'relative',
    width: '100%',
    maxWidth: '900px',
    padding: '50px 0',
  },
  slideContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection :'column',
    '& p': {
      padding: '0 160px',
    }
  },
  imageContent: {
    height: '200px',
    width: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    margin: 'auto',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
    }
  },
  textContent: {
    textAlign: 'center',
    '& h6' :{
      color:'grey',
    },
    '& svg': {
      color: 'darkcyan',
      fontSize: '3rem',
    },
    '& p': {
      color: '#fff',
      textTransform: 'lowercase',
    } 
  },
  '@media screen and (max-width: 768px)': {
    headContainer: {
      '& h3': {
        fontSize: '2rem',
      },
    },
  },

  mobileTestContainer: {
    margin: '10px 0',
    width: '100%',
  },
  mobileSlideContent: {
    display: 'flex',
    width: '100%',
    borderBottom: '2px solid #fff',
  },
  mobileImageContent: {
    width: '100px',
    height: '100px',
    margin: 'auto',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
    }
  },
  mobileTextContent: {
    width: '80%',
    textAlign: 'start',
    margin: '10px',
    '& h6': {
      fontSize: '12px',
      fontWeight: '500',
      color: 'darkcyan',
      textAlign: 'end',
    },
    '& svg': {
      fontSize: '10px',
    },
    '& h5': {
      fontSize: '18px',
      textAlign: 'end',
    },
    '& p': {
      fontSize: '13px',
      fontWeight: '500',
      color: 'white',
      textTransform: 'lowercase',
    }
  },
}));

export default TestimonialStyles;
