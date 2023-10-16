import { makeStyles } from '@mui/styles';

const CartCardsStyles = makeStyles(() => ({
  cartDetailsContainer: {
    textAlign: 'center',
    '& h1': {
      fontSize: '2rem',
      margin: '20px auto',
    }
  },
  cartDetailsHeadContainer: {
    marginTop: '5rem',
    '& div': {
      margin: '16px auto',
    }
  },
  cartDetailsContent: {
    marginTop: '30px',
  },
  itemDetailsContainer: {
    boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
    width: '60%',
    margin: '10px auto',
    display: 'flex',
  },
  imageContent: {
    width: '40%',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },
  textContent: {
    width: '60%',
    padding: '10px',
    textAlign: 'start',
    '& h6': {
      fontSize: '17px',
      marginBottom: '5px',
      '& span': {
        fontSize: '16px',
        fontWeight: '500',
        color: '#044660'
      },
      '&:nth-child(1)': {
        fontSize: '18px',
        '& span': {
          fontSize: '20px',
          fontWeight: '500',
          color: '#044660'
        },
      }
    },
  },
  priceContainer: {
    display: 'flex',
    margin: '10px 0px',
    justifyContent: 'space-between',
    '& p': {
      width: '50%',
      fontSize: '17px',
      marginBottom: '5px',
      alignItem: 'center',
      '& span': {
        fontSize: '20px',
        fontWeight: '500',
        color: '#044660',
        '& svg': {
          marginRight: '10px',
          verticalAlign: 'sub',
        },
      },
    }
  },
  totalPriceContent: {
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      marginRight: '2px',
      verticalAlign: 'sub',
    },
    '& h6': {
      fontSize: '16px',
      fontWeight: '600',
      '& span' :{
        fontSize: '18px',
        '& svg': {
          marginRight: '2px',
          verticalAlign: 'sub',
        },
      }
    },
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      backgroundColor: '#dfdddd',
      '& button': {
        color: 'black',
        border: 'none',
        fontSize: '20px',
      },
    },
  },
  '@media screen and (max-width: 768px)': {
    cartDetailsContent: {
      marginTop: '30px',
    },
    itemDetailsContainer: {
      width: '90%',
      margin: '10px auto',
      display: 'block',
    },
    imageContent: {
      width: '100%',
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
    textContent: {
      width: '100%',
      padding: '10px',
      textAlign: 'start',
      '& h6': {
        fontSize: '15px',
        '& span': {
          fontSize: '14px',
        },
        '&:nth-child(1)': {
          fontSize: '16px',
          '& span': {
            fontSize: '18px',
          },
        }
      },
    },
    priceContainer: {
      display: 'flex',
      margin: '10px 0px',
      justifyContent: 'space-between',
      '& p': {
        width: '100%',
        fontSize: '14px',
        '& span': {
          fontSize: '16px',
          '& svg': {
            marginRight: '2px',
            verticalAlign: 'sub',
          },
        },
      }
    },
    totalPriceContent: {
      display: 'flex',
      justifyContent: 'space-between',
      '& svg': {
        marginRight: '2px',
        fontSize: '2.2rem',
      },
      '& h6': {
        fontSize: '16px',
        fontWeight: '600',
        '& span' :{
          fontSize: '18px',
          '& svg': {
            marginRight: '10px',
            fontSize: '1.2rem',
          },
        }
      },
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      '& div': {
        backgroundColor: '#dfdddd',
        '& button': {
          color: 'black',
          border: 'none',
          fontSize: '20px',
        },
      },
    },
  }
}));

export default CartCardsStyles;