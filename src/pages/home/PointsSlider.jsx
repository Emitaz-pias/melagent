import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { usePointsArray } from './pointsArry';

const PointsSlider = () => {
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  // Function to update slidesToScroll based on window width

 const updateSlidesToScroll = () => {
  if (window.innerWidth >= 1280) {
    setSlidesToScroll(5);
  } else if (window.innerWidth >= 960) {
    setSlidesToScroll(3);
  } else {
    setSlidesToScroll(1);
  }
};

useEffect(() => {
  // Set initial value
  updateSlidesToScroll();

  // Update value on window resize
  window.addEventListener('resize', updateSlidesToScroll);
  return () => window.removeEventListener('resize', updateSlidesToScroll);
}, []);
//7=g!V:RS[v0NN7s@wjWV
  const settings = {
    infinite: true,
    slidesToShow: slidesToScroll,
    arrows:false,
    slidesToScroll:1,
    autoplay: true,
    speed:1000,
    autoplaySpeed:3000,
    cssEase: "linear"
  };
  
  const pointsArray = usePointsArray();

  return (
    <Box className="slider-container" sx={{ width: '100%', marginTop: '2em' }}>
      <Slider {...settings}>
        {pointsArray.map((point, index) => (
          <Grid key={index} item lg={8} xs={12} md={6} sx={{ padding: '1em', textAlign: 'center' }}>
            <Box component='img' sx={{ width: '50%', margin: '0 auto' }} src={point.image} alt={point.title} />
            <Box component='h3' sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '0.5em' }}>{point.title}</Box>
          </Grid>
        ))}
      </Slider>
    </Box>
  );
};

export default PointsSlider;
