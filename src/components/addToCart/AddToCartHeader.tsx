import React, { useState, useEffect } from 'react';
import { Box, AppBar, Toolbar, Typography, styled,IconButton, Tooltip,  Menu, Container, Table, 
  TableHead, TableRow, TableCell, TableBody, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart, Home, KeyboardBackspace, Close, Delete, CurrencyRupee, Schedule } from '@mui/icons-material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import headerStyles from './AddToCartHeaderStyles';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import emptyCartImage from '../../assets/images/emptyCartIMage.svg';
import { useDispatch, useSelector } from 'react-redux';
import { BuyCourseDataProps, OurCoursesDataProps } from '../../types';
import useResponsive from '../../helper/responsive';
import { DeleteFromCart } from '../../redux/actions/action';
import OurCoursesData from '../../assets/dummyData/OurCourses';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const AddToCartHeader = () => {
  const classes = headerStyles();
  const isMobile = useResponsive();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ totalPrice, setTotalPrice ] = useState<number>(0);
  
  // to get the data we use useSelector that will help to get state value inside reducer
  const getData = useSelector((state: { cartReducer: { carts: BuyCourseDataProps[] } }) => state.cartReducer.carts);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteItemFromCart = (id: number) => {
    dispatch(DeleteFromCart(id));
  };

  const handleTotalPrice = () => {
    let price = 0;
    getData.map((data: BuyCourseDataProps) => {
      price = data.price * data.duration + price;
    });
    setTotalPrice(price);
  };

  const handleOnClickBuyCourseNow = (courseData : OurCoursesDataProps[]) => {
    // Extract an array of courses with category title inside courses
    const finalCourseData: BuyCourseDataProps[] = [];
    for (const category of courseData) {
      for (const course of category.courses) {
        // Concatenate category ID and course ID to create a unique ID
        const uniqueCourseID = Number(category.id.toString() + course.id.toString());
        finalCourseData.push({
          ...course,
          category: category.title,
          id: uniqueCourseID, // Update the ID
        });
      }
    }
    // Navigate to the target route and send data as state
    navigate('/courses/buyCourses', { state: { finalCourseData }});
  };

  useEffect(() => {
    handleTotalPrice();
  }, [handleTotalPrice]);
  

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#044660' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1,display: { xs: 'none', md: 'flex' } }} className={classes.headerContentContainer}>
            <Tooltip title="Home"><Box><Link to='/'><Home /></Link></Box></Tooltip>
            <Tooltip title="Back"><Box onClick={() => handleOnClickBuyCourseNow(OurCoursesData as OurCoursesDataProps[])}><KeyboardBackspace /></Box></Tooltip>
            <h3>Add To Cart</h3>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to='/' style={{textDecoration: 'none'}}>Home</Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to='/courses/buyCourses' style={{textDecoration: 'none'}}>Back</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
            Add To Cart
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }} className={classes.cartIconContainer}>
            <Tooltip title="Add To Cart">
              <IconButton aria-label="cart" sx={{ p: 0 }} onClick={handleClick}>
                <StyledBadge badgeContent={getData.length} color="secondary" id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}>
                  <ShoppingCart />
                </StyledBadge>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getData.length ? 
            <Box className={classes.cardDetailsContainer}>
              <Table className={classes.cardDetailsTable}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Image</TableCell>
                    <TableCell align="left">Course Name</TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    getData.map((item: BuyCourseDataProps) => {
                      return (
                        <TableRow  key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell align="left">
                            <NavLink to={`/courses/buyCourses/cartDetails/${item.id}`}>
                              <img onClick={handleClose} src={item.image} alt='item image' style={{ width: '6rem', height: '6rem',cursor: 'pointer' }}/>
                            </NavLink>
                          </TableCell>
                          <TableCell align="left">
                            <p><span>{item.name}</span></p>
                            <p>Price: <CurrencyRupee /><span>{item.price}</span></p>
                            <p>Duration: <Schedule /><span>{item.duration} week</span></p>
                            {isMobile ? <Delete onClick={() => handleDeleteItemFromCart(item.id)} style={{ color: 'red', cursor: 'pointer'}}/> : <></>}
                          </TableCell>
                          <TableCell align="center">{isMobile ? <></> : <Delete onClick={() => handleDeleteItemFromCart(item.id)} style={{ color: 'red', cursor: 'pointer'}}/>}</TableCell>
                        </TableRow>
                      );
                    })
                  }
                </TableBody>
                <Typography variant='h6'>Total:<CurrencyRupee /> <span>{totalPrice}</span></Typography>
              </Table>
            </Box> 
            : 
            <Box className={classes.emptyCardDetails}>
              <Close onClick={handleClose} />
              <p>Your Carts is Empty!</p>
              <img src={emptyCartImage} alt='Cart Image' />
            </Box>
        }
      </Menu>
    </AppBar>
  );
};
export default AddToCartHeader;