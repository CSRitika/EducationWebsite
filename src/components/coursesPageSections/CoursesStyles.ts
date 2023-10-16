import { makeStyles } from '@mui/styles';
import heroImage from '../../assets/images/allcousesHeroImage.jpg';

const CoursesStyles = makeStyles(() => ({
  heroContainer: {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'contain',
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
      padding: '8% 0 0 10%',
    },
  },
  '@media screen and (max-width: 768px)': {
    heroContainer: {
      backgroundImage: `url(${heroImage})`,
      backgroundSize: '1153px 446px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '8% 75%',
      backgroundPositionY: 'none',
      backgroundPositionX: 'none', 
      top: '0',
      left: '0',
      width: '100%',
      height: '80vh',
    },
    heroContent: {
      '& div': {
        textAlign: 'center',
        padding: '8px 10px',
      },
    },
  }

}));

export default CoursesStyles;
