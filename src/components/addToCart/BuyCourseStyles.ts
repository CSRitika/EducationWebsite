import { makeStyles } from '@mui/styles';

const CartCardsStyles = makeStyles(() => ({
  cartCardMainContainer: {
    boxSizing: 'border-box',
  },
  cartCardHeadContainer: {
    marginTop: '5rem',
    '& div': {
      margin: '16px auto',
    }
  },
  cartCardBoxContainer:{
    width: '95%',
    margin: '10px auto',
    '& div': {
      '& h2' :{
        fontSize: '1.8rem',
        fontWeight: '600',
        margin: '20px',
        display: 'inline-block',
        width: '100%',
        borderBottom: '1.5px solid #044660',
        textTransform: 'uppercase',
        color: '#044660',
      }
    },
  },
  courseContainer: {
    marginTop: '10px',
    width: '80%',
  },
  courseItem: {
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
    '& img': {
      width: '100%',
      height: '35vh',
    },
    '& h1': {
      fontSize: '18px',
      margin: '10px',
      fontWeight: '600',
      color: '#044660',
    },
    '& h6': {
      fontSize: '15px',
      margin: '10px',
      fontWeight: '600',
      '& svg': {
        marginRight: '2px',
        verticalAlign: 'sub',
        fontSize: '1.2rem',
      },
    },
    '& button': {
      margin: '10px',
      padding: '8px 10px',
      fontSize: '16px',
      backgroundColor: '#e6375a',
      color: '#fff',
      width: '94%',
      '& img' : {
        width: '3.2rem',
        padding: '0px',
        height: '2.5rem',
        marginLeft: 'auto',
      },
      alignItems: 'center',
      borderRadius: '4px',
      cursor: 'pointer',
      display: 'inline-flex',
      height: '50px',
      justifyContent: 'center',
      lineHeight: 1,
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'box-shadow .15s,transform .15s',
      '&:hover' : {
        backgroundColor: '#e6375a',
        backgroundImage: 'none!important',
      },
    },
  },

  '@media screen and (max-width: 768px)': {
    cartCardBoxContainer:{
      width: '100%',
      margin: '0px',
      '& div': {
        '& h2' :{
          fontSize: '1.4rem',
          width: '80%',
        }
      },
    },
  }
}));

export default CartCardsStyles;