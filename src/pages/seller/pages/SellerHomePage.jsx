import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SalesCard from '../components/SalesCard';
import SalesChart from '../components/SalesChart';
import { useDispatch, useSelector } from "react-redux";
import { getProductsbySeller, getSpecificProducts} from '../../../redux/userHandle';

const SellerHomePage = () => {
  const {currentUser, specificProductData, sellerProductData} = useSelector(state => state.user);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsbySeller(currentUser._id));
    dispatch(getSpecificProducts(currentUser._id, "getOrderedProductsBySeller"));
  }, [dispatch, currentUser._id])

  return (
    <Grid container spacing={3} sx={{ padding: "9px" }}>

      <Grid item xs={12} sm={6} md={3}>
        <SalesCard title="Weekly Sales" total={specificProductData.length} color='primary' icon={'ant-design:carry-out-filled'} />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <SalesCard title="Added to Cart" total={sellerProductData.length} color="success" icon={'ant-design:shopping-cart-outlined'} />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <SalesCard title="Ongoing Orders" total={specificProductData.length} color="warning" icon={'material-symbols:data-exploration'} />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <SalesCard title="Cancelled Orders" total={0} color="error" icon={'material-symbols:free-cancellation-rounded'} />
      </Grid>

      {/* <Grid item xs={12} lg={6}>
        <SalesChart type="line" />
      </Grid>

      <Grid item xs={12} lg={6}>
        <SalesChart type="bar" />
      </Grid> */}
    </Grid>
  );
};

export default SellerHomePage;

