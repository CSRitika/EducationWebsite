import React, { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material';
import CartCardsStyles from './CartDetailsStyles';
import { CurrencyRupee, Delete } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BuyCourseDataProps } from '../../types';
import { AddToCart, DeleteFromCart, RemoveFromCart } from '../../redux/actions/action';

const CartDetails = () => {
  const classes = CartCardsStyles();
  const navigate = useNavigate();
  const { id } = useParams();
  const numericId = parseInt(id as string);
  console.log(numericId);
  const dispatch = useDispatch();

  const [finalData, setFinalData] = useState<BuyCourseDataProps[] | []>([]); // Initialize as an empty array

  // Get data from Redux
  const getData = useSelector((state: { cartReducer: { carts: BuyCourseDataProps[] } }) => state.cartReducer.carts);

  const compareData = () => {
    if (!isNaN(numericId)) {
      const particularData = getData.filter((data: BuyCourseDataProps) => data.id === numericId);
      console.log(particularData);
      setFinalData(particularData);
    }
  };

  const handleDeleteItemFromCart = (id: number) => {
    dispatch(DeleteFromCart(id));
    navigate('/courses/buyCourses');
  };
  
  //increment the item
  const sendCartData = (course: BuyCourseDataProps ) => {
    dispatch(AddToCart(course));
  };

  // decrement the item
  const removeCartData = (item: BuyCourseDataProps) => {
    dispatch(RemoveFromCart(item));
  };

  useEffect(() => {
    compareData();
  }, [getData]);

  console.log(finalData);
  return (
    <>
      <Box className={classes.cartDetailsContainer}>
        <Box className={classes.cartDetailsHeadContainer}>
          <Typography variant='h1'>Your Cart Details</Typography>
        </Box>

        {finalData?.map((data) => {
          return (
            <Box className={classes.cartDetailsContent} key={data?.id}>
              <Box className={classes.itemDetailsContainer}>
                <Box className={classes.imageContent}>
                  <img src={data.image} alt=''/>
                </Box>
                <Box className={classes.textContent}>
                  <Typography variant='h6'>Course : <span>{data.name}</span></Typography>
                  <Typography variant='h6'>By : <span>Er. Henry Richard</span></Typography>
                  <Typography variant='h6'>Started from : <span>1 Dec 2023</span></Typography>
                  <Divider />
                  <Box className={classes.priceContainer}>
                    <Typography variant='body1'>Price : <span><CurrencyRupee />{data.price} / week</span></Typography>
                    <Typography variant='body1'>Duration: <span>{data.duration} week</span></Typography>
                  </Box>
                  <Typography variant='h6'>Review: <span></span></Typography>
                  <Box className={classes.totalPriceContent}>
                    <Typography variant='h6'>Total: <span><CurrencyRupee />{data.price * data.duration}</span></Typography>
                    <Delete onClick={() => handleDeleteItemFromCart(data.id)} style={{ color: 'red', cursor: 'pointer'}}/>
                  </Box>
                  <Box className={classes.buttonContainer}>
                    <ButtonGroup size="small" aria-label="small outlined button group">
                      <Button onClick={() => sendCartData(data)}>+</Button>
                      <Button>{data.duration}</Button>
                      <Button onClick={() => removeCartData(data)}>-</Button>
                    </ButtonGroup>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default CartDetails;