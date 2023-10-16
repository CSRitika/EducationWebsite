import { makeStyles } from '@mui/styles';

const NewsLetterStyles = makeStyles(() => ({
  newsletterContainer: {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWONRSiocth6m2kQUVuVdkB_lbcQOiTDZePq7lxrbzu2xrojAJRARcZYMCH9nTZzDeZHY&usqp=CAU")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '50px 0',
    color: '#fff',
  },
  flexContainer: {
    width: '100%',
    display: 'flex',
  },
  leftContent: {
    width: '50%',
    margin: 'auto 20px',
    '& h4': {
      color: '#fff',
      fontSize: '30px',
      fontWeight: '500',
      marginBottom: '15px',
    }
  },
  rightContent: {
    width: '50%',
    '& div': {
      width: '50%',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& input': {
        width: '100%',
        padding: '20px',
        border: 'none',
        outline: 'none',
        height: '30px'
      },
      '& svg': {
        color: '#1eb2a6',
        cursor: 'pointer',
      }
    },
  },
  '@media screen and (max-width: 768px)': {
    newsletterContainer: {
      padding: '10px',
    },
    flexContainer: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
    },
    leftContent: {
      width: '100%',
      margin: '10px 0px',
      '& h4': {
        fontSize: '24px',
      }
    },
    rightContent: {
      width: '100%',
      '& div': {
        width: '100%',
      },
    },
  }
}));

export default NewsLetterStyles;
