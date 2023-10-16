import { makeStyles } from '@mui/styles';

const ContactFormStyles = makeStyles(() => ({
  mainContainer: {
    margin: '10px auto',
    '& div': {
      '& div': {
        '& h4': {
          '& span': {
            backgroundColor: 'rgba(236, 237, 237, 1)',
          },
        },
      },
    },
  },
  flexContainer: {
    width: '95%',
    margin: '0px auto',
    display: 'flex',
    backgroundColor: '#fff',
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
  },
  leftContent: {
    width: '50%',
    '& iframe' : {
      width: '100%',
      height: '100%',
      border: 'none',
    }
  },
  rightContent: {
    width: '50%',
    margin: '10px 40px',
    '& h3': {
      fontSize: '30px',
      fontWeight: '500',
    },
    '& h6': {
      marginBottom: '10px',
      color: 'darkcyan',
      fontSize: '15px',
    },
    '& form': {
      '& input, textarea': {
        width: '100%',
        padding: '15px',
        marginBottom: '15px',
        outline: 'none',
        border: '1px solid grey',
      },
      '& button': {
        fontSize: '15px',
        outline: 'none',
        width: '50%',
        fontWeight: '600',
        border: '1px solid transparent',
        borderRadius: '0px',
        height: '46px',
        color: '#000',
        backgroundColor: '#006570',
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
    '& h5': {
      marginTop: '20px',
      fontWeight: '500',
      marginBottom: '10px',
    },
    '& span': {
      color: '#006570',
      fontWeight: '800',
      fontSize: '15px',
      wordSpacing: '10px',
    }
  },
  itemGrid: {
    margin: '0px'
  },
  boxContainer: {
    marginBottom: '10px',
    '& p': {
      color: '#007c89',
      fontWeight: '600',
      fontSize: '17px',
    },
  },
  flexFormContent: {
    '& input:nth-child(1)': {
      marginRight: '10px',
    }
  },

  '@media screen and (max-width: 768px)': {
    flexContainer: {
      display: 'Block',
    },
    leftContent: {
      width: '100%',
      margin: '0px',
    },
    itemGrid: {
      textAlign: 'left',
    },
    rightContent: {
      width: '100%',
      padding: '10px',
      margin: '0px',
      textAlign: 'center',
    },
  }

}));

export default ContactFormStyles;
