import { makeStyles } from '@mui/styles';

const BlogCardStyles = makeStyles(() => ({
  blogContainer: {
    margin: '10px',
  },
  blogContent: {
    margin: '0 20px',
  },
  imageContent: {
    height: '40vh',
    width: '100%',
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  textContent: {
    marginTop: '10px',
  },
  flexAdminContent: {
    display: 'flex',
    width: '100%',
    '& span': {
      fontSize: '13px',
      width: '33.3%',
      display: 'flex',
      textTransform: 'uppercase',
      fontWeight: '500',
      color: '#1eb2a6',
      '& svg': {
        fontSize: '1.2rem',
      }
    }
  },
  paraContent: {
    '& h3': {
      fontWeight: '500',
      fontSize: '22px',
      lineHeight: '30px',
      margin: '20px 0',
      transition: '0.5s',
      '&:hover': {
        color: '#1eb2a6',
        cursor: 'pointer',
      }
    },
  },
}));

export default BlogCardStyles;
