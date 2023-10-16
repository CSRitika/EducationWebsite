import { makeStyles } from '@mui/styles';

const headerStyles = makeStyles(() => ({
  headerContentContainer: {
    alignItems: 'center',
    '& div': {
      color: '#fff',
      '& a': {
        textDecoration: 'none',
        color: '#fff',
        '& svg': {
          fontSize: '38px',
        }
      },
      '&:nth-child(2)': {
        marginLeft: '20px',
        marginTop: '3px',
        '& a': {
          '& svg': {
            fontSize: '2rem',
          }
        },
      },
    },
    '& h3': {
      marginLeft: '10px',
    },
  },
  cartIconContainer: {
    '& button': {
      color: '#fff',
      '& span': {
        '& svg': {
          fontSize: '38px',
        },
      },
    }
  },
  cardDetailsContainer: {
    width: '30rem',
    padding: '20px',
  },
  cardDetailsTable: {
    '& thead': {
      borderBottom: '2px solid black',
      '& tr': {
        '& th': {
          padding: '4px',
          fontSize: '1rem',
          fontWeight: '600',
        }
      }
    },
    '& tbody': {
      borderBottom: '1px solid black',
      '& tr': {
        '& td': {
          padding: '10px 0px',
          '& p': {
            fontSize: '14px',
            '& span' :{
              fontSize: '16px',
            },
            '& svg': {
              verticalAlign: 'sub',
              fontSize: '1.3rem',
              marginRight: '2px',
            }
          },
        },
      },
    },
    '& h6': {
      fontSize: '16px',
      '& svg': {
        verticalAlign: 'sub',
        fontSize: '1.3rem',
        marginRight: '2px',
      },
      '& span': {
        fontSize: '20px',
      },
    },
  },
  emptyCardDetails : {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    padding: '20px',
    '& svg': {
      position: 'absolute',
      top: 2,
      right: 20,
      fontSize: '23px',
      cursor: 'pointer',
    },
    '& p': {
      fontSize: '22px',
      margin: '22px 8px',
      fontWeight: '600',
      color: 'darkred',
    },
    '& img': {
      width: '5rem',
      padding: '10px',
    },
  },
  '@media screen and (max-width: 768px)': {
    cardDetailsContainer: {
      width: '100%',
      padding: '10px',
    },
    cardDetailsTable: {
      '& tbody': {
        '& tr': {
          '& td': {
            padding: '10px 4px',
            '& p': {
              fontSize: '12px',
              '& span' :{
                fontSize: '14px',
              },
              '& svg': {
                verticalAlign: 'sub',
                fontSize: '1rem',
                marginRight: '1px',
              }
            },
          },
        },
      },
      '& h6': {
        fontSize: '12px',
        '& svg': {
          verticalAlign: 'sub',
          fontSize: '1.1rem',
          marginRight: '1px',
        },
        '& span': {
          fontSize: '16px',
        },
      },
    },
  }
}));

export default headerStyles;