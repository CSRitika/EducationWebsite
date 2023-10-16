import { makeStyles } from '@mui/styles';
import heroImage from '../../assets/images/aboutUsHeroImage.jpg';

const AboutStyles = makeStyles(() => ({
  heroContainer: {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
  },
  heroContent: {
    position: 'relative',
    color: '#000',
    '& div': {
      textAlign: 'center',
      position: 'absolute',
      top: '8rem',
      left: '15rem',
    },
  },
  '@media screen and (max-width: 768px)': {
    heroContainer: {
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundPositionY: 'center',
      backgroundPositionX: 'right', 
      top: '0',
      left: '0',
      width: '100%',
      height: '80vh',
    },
    heroContent: {
      '& div': {
        textAlign: 'center',
        position: 'absolute',
        top: '8rem',
        left: '2rem',
        '& h2': {
          color: '#1c5f52',
        }
      },
    },
  }

}));

export default AboutStyles;
