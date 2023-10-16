import React,{useState} from 'react';
import ContactFormStyles from './ContactFormStyle';
import { Box, Button, Typography } from '@mui/material';
import HeadingSection from '../../common/headingSection/HeadingSection';

const ContactForm = () => {
  const classes = ContactFormStyles();
  const mapData = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113873.48985092605!2d80.9598976!3d26.886143999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1696688783761!5m2!1sen!2sin';
  const [text, setText] = useState(''); // Initialize state with an empty string
  const handleTextChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(event.target.value); // Update the text state when the input changes
  };

  return (
    <Box className={classes.mainContainer}>
      <HeadingSection title='Contact Us' subtitle='Contact Us For Your Assistance'/>
      <Box className={classes.flexContainer}>
        <Box className={classes.leftContent}>
          <iframe src={mapData}></iframe>
        </Box>
        <Box className={classes.rightContent}>
          <Typography variant='h3'>Need Help?</Typography>
          <Typography variant='h6'>We had Love to hear from You!</Typography>

          <Box className={classes.itemGrid}>
            <Box className={classes.boxContainer}>
              <h4>ADDRESS: </h4>
              <p>198 west 21 street, suite tower 47, mysore chennai</p>
            </Box>
            <Box className={classes.boxContainer}>
              <h4>EMAIL: </h4>
              <p>info@gmail.com</p>
            </Box>
            <Box className={classes.boxContainer}>
              <h4>PHONE: </h4>
              <p>+91 6774885848</p>
            </Box>
          </Box>

          <form action=''>
            <Box className={classes.flexFormContent}>
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
            </Box>

            <input type='email' placeholder='Subject' />
            <textarea cols={30} rows={10} value={text} onChange={handleTextChange}>Create a message here...</textarea>
            <Button>SEND MESSAGE</Button>
          </form>

          <Typography variant='h5'>Follow us here</Typography>
          <span>FACEBOOK TWITTER INSTAGRAM</span>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactForm;