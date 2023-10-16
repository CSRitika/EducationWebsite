import React, {useState} from 'react';
import HeaderStyles from './HeaderStyles';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Menu, Clear } from '@mui/icons-material/';

const Navbar = () => {
  const classes = HeaderStyles();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };
  return (
    <>
      <header className={classes.navContainer}>
        <nav className={`${classes.navFlex} ${isNavOpen ? classes.mobileNavOpen : ''}`}>
          <ul className={classes.navFlex} onClick={closeNav}>
            <li>
              <NavLink to='/'>
                  Home
              </NavLink>
            </li>
            <li><NavLink to='courses'>All Courses</NavLink></li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='team'>Team</NavLink></li>
            <li><NavLink to='blogs'>Blogs</NavLink></li>
            <li><NavLink to='contact'>Contact</NavLink></li>
          </ul>
          <Box className={classes.rightContent}>
            <Box className={classes.rightButton}><Typography variant="h6">GET CERTIFICATE</Typography></Box>
          </Box>

          <Box className={classes.toggleButton} onClick={toggleNav}>
            { isNavOpen ? <Clear /> : <Menu /> }
          </Box>
        </nav>
      </header>
    </>
  );
};

export default Navbar;