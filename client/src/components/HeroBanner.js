import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/andrea.jpg';


const HeroBanner = () => {
  return (
    <div className="whitespace">
    <Box className="test" sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }}  position="relative" p="20px">
        <Typography color="#99D98C"
        fontWeight="400" fontSize="75px" fontFamily="Copperplate, Papyrus, fantasy"	
        >SWOLEMATE
        </Typography>
        <Typography fontWeight={400} fontFamily="Arial, Helvetica, sans-serif"
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}
        mb="23px" mt="30px"
        >
            Find your perfect workout <br /> 
        </Typography>
        <Typography fontSize="22px"
        lineHeight="35px" color="#99D98C" fontFamily="Arial, Helvetica, sans-serif" mb={4}>
            Easy to follow demonstrations make fitness enjoyable!
        </Typography>
       
        <Typography
        fontWeight={200}
        color="#99D98C"
        sx={{
            opacoty: 0.1,
            display: { lg: 'block', xs: 'none'}
        }}
        fontSize='200px'
        >

        </Typography>
        <img src={HeroBannerImage} alt="banner"
        className="hero-banner-img"
        />
    </Box>
    </div>
  )
}

export default HeroBanner