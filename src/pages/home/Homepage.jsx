import { Box, Button, Grid } from '@mui/material';
import React, { useContext, useState} from 'react';
import './Homepage.css'
import firstImm from '../../images/img.png'
import manStanding from '../../images/manStanding.png'
import epos from '../../images/epos.png'
import coinHands from '../../images/coinHands.png'
import submitApplication from '../../images/submitApplication.png'
import website from '../../images/website.png'
import email from '../../images/email.png'
import logo from '../../images/logo.png'
import './SubmitForm'
import SubmitForm from './SubmitForm'
import { useRef } from 'react';
import { AppContext } from '../../AppContext';
// import { Link } from 'react-router-dom';
import FormModal from '../../components/modal/FormModal'
import PointsSlider from './PointsSlider';



const Homepage = () => {
  const {language} = useContext(AppContext);   
  const translations = require(`../../translations/${language.toLowerCase()}.json`);
  const aboutUsRef = useRef(null);
  const collaborationRef = useRef(null);
  const contactRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  


document.title =  translations.homepage.title
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Grid container sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: { sm: 'wrap-reverse', lg: 'nowrap', md: 'nowrap', xs: "wrap-reverse" } }}>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box className='first-screen__title' component='h1'>
          {translations.homepage.heaing1}
          </Box>
          <Box component='p' sx={{ fontWeight: 'bolder',textTransform:'uppercase' }}>
         {translations.homepage.para1}
         </Box>
          <Button className="becomeAgentBttton" sx={{
            marginRight: '2em',
            backgroundColor: '#FEBD02',
            borderRadius: '3px',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '21px',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#000000',
            textShadow: '0 2px 0 #FFCF44',
            height: '1em',
            margin: '0.8em',
            padding: '1em'
          }} onClick={handleOpenModal}>{translations.homepage.becomeAgent}</Button>

        </Grid>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box component='img' sx={{ width: { xs: '100%', lg: '70%', md: '75%' } }} src={firstImm}></Box>
        </Grid>
      </Grid> 
      {/* asdf */}
      <Grid container justifyContent={'space-around'} textAlign={'center'} alignItems='center'>
      <PointsSlider/>
      </Grid>
      <Grid container sx={{ marginTop: '1em', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: { sm: 'wrap-reverse', lg: 'nowrap', md: 'nowrap', xs: "wrap" } }}>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box component='img' sx={{ width: { xs: '100%', lg: '70%', md: '75%' } }} src={manStanding}></Box>
        </Grid>
        <Grid id='aboutUs' ref={aboutUsRef} padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box className='first-screen__title' component='h1'>
            {translations.homepage.heaing2}
          </Box>
          <Box component='p' sx={{ fontWeight: 'bolder' }}>  {translations.homepage.para2}</Box>
          <Box component='p' sx={{ fontWeight: 'bolder' }}>{translations.homepage.para3}</Box>
          <Button className="becomeAgentBttton" onClick={handleOpenModal}  sx={{
            marginRight: '2em',
            backgroundColor: '#FEBD02',
            borderRadius: '3px',
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '21px',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#000000',
            textShadow: '0 2px 0 #FFCF44',
            height: '1em',
            margin: '0.8em',
            padding: '1em'
          }}>{translations.homepage.startEarningBtn}</Button>

        </Grid>
      </Grid>
      <Grid container sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: { sm: 'wrap-reverse', lg: 'nowrap', md: 'nowrap', xs: "wrap-reverse" } }}>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box className='first-screen__title' component='h1'>
            {translations.homepage.heaing3}
          </Box>
          <Box component='p' sx={{ fontWeight: 'bolder' }}>
          {translations.homepage.para4}
            {/* <br />
            You can use our app to:
            <ul>
              <li>Accept deposits and top up customers’ accounts</li>
              <li>Credit winnings online or in cash</li>
              <li>Set up your own agent network in your regio</li>
              <li>Expand your business to another country and bring in new customers</li>
            </ul> */}
          </Box>
        </Grid>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box component='img' sx={{ width: { xs: '100%', lg: '70%', md: '75%' } }} src={epos}></Box>
        </Grid>
      </Grid>
      <Grid id='collaboration' ref={collaborationRef} container sx={{ marginTop: '1em', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: { sm: 'wrap-reverse', lg: 'nowrap', md: 'nowrap', xs: "wrap" } }}>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box component='img' sx={{ width: { xs: '100%', lg: '70%', md: '75%' } }} src={coinHands}></Box>
        </Grid>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box className='first-screen__title' component='h1'>
          {translations.homepage.heaing4}
          </Box>        
          <Box component='p'>
          {translations.homepage.para5}
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexWrap: { sm: 'wrap-reverse', lg: 'nowrap', md: 'nowrap', xs: "wrap-reverse" } }}>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box className='first-screen__title' component='h1'>
            {translations.homepage.heaing5}
          </Box>
          <Box component='ol' sx={{'& li::marker': {color: '#FEBD02'},}} >
          <Box component='li' sx={{ fontWeight: 'bolder' }}>
            <Box component='h4' color='#FEBD02'>{translations.homepage.li1}</Box> 
            <Box component='span'>{translations.homepage.para6}</Box>
          </Box>
          <Box component='li' sx={{ fontWeight: 'bolder' }}>
            <Box component='h4' color='#FEBD02'>{translations.homepage.li2}</Box> 
            <Box component='span'>{translations.homepage.para7}</Box>
          </Box>
          <Box component='li' sx={{ fontWeight: 'bolder' }}>
            <Box component='h4' color='#FEBD02'>{translations.homepage.li3}</Box> 
            <Box component='span'>{translations.homepage.para8}</Box>
          </Box>
          <Box component='li' sx={{ fontWeight: 'bolder' }}>
            <Box component='h4' color='#FEBD02'>{translations.homepage.li4}</Box> 
            <Box component='span'>{translations.homepage.para9}</Box>
          </Box>
          <Box component='li' sx={{ fontWeight: 'bolder' }}>
            <Box component='h4' color='#FEBD02'>{translations.homepage.li5}</Box> 
            <Box component='span'>{translations.homepage.para10}</Box>
          </Box>         
          </Box>
        </Grid>
        <Grid padding={'0.5em'} item lg={6} md={12} xs={12} >
          <Box component='img' sx={{ width: { xs: '100%', lg: '70%', md: '75%' } }} src={epos}></Box>
        </Grid>
      </Grid>
      <Grid id='contact' ref={contactRef} container marginBottom={'6em'} >
        <Grid textAlign={'center'} marginTop={'1em'} item lg={6} xs={12} >
          <h1 className='first-screen__title'>{translations.homepage.heading6}</h1>
          <ul>
            <li style={{ listStyle: 'none', padding: '1em' }} ><Box sx={{ display: 'flex', alignItems: 'center' }}> <Box component='img' sx={{ width:{lg:'5%',xs:'10%'} }} src={website}></Box><Box component="p" sx={{ margin: '1em' }}> <u>melbet.com</u></Box></Box></li>
            <li style={{ listStyle: 'none', padding: '1em' }} ><Box sx={{ display: 'flex',alignItems: 'center' }}><Box component='img' sx={{ width:{lg:'5%',xs:'10%'},height:{lg:'6%',xs:'9%'} }} src={email}></Box> <Box component="p" sx={{ margin: '1em' }}><u>melbetagent.com</u> </Box></Box> </li>
            <li style={{ listStyle: 'none', padding: '1em' }} ><Box sx={{ display: 'flex',alignItems: 'center' }}><Box component='img' sx={{ width:{lg:'5%',xs:'10%'},height:{lg:'6%',xs:'9%'} }} src={email}></Box> <Box component="p" sx={{ margin: '1em',zIndex:1 }}><u>manager@melbetagent.com</u> </Box></Box> </li>
            {/* <li style={{ listStyle: 'none', padding: '1em' }} ><Box sx={{ display: 'flex',alignItems: 'center' }}><Box component='img' sx={{ width:{lg:'5%',xs:'10%'},height:{lg:'6%',xs:'9%'} }} src={email}></Box> <Box component="p" sx={{ margin: '1em',zIndex:1 }}><u>team@melbetagent.com</u> </Box></Box> </li> */}
          </ul>           
          <Box   component="img" src={submitApplication} sx={{ width: '100%', marginTop:{lg:'-12em'},marginLeft:{lg:'4em'}}} />                          
        </Grid>
        
        <Grid item sx={{paddingLeft:{lg:'2em'}}}  lg={5} xs={12} md={8} >          
          <Box>
           <SubmitForm ></SubmitForm>
          </Box>
               
        </Grid>
    
         <Box sx={{ display: 'inline-flex', marginTop:{lg:'-7em'},justifyContent:{lg:'space-around',xs:'center'},alignItems:'center',flexWrap:{lg:'nowrap',xs:'wrap'} }}>
            <Box component='img' sx={{ width:{lg:'25%',xs:'30%'} }} src={logo}></Box>
             <Box  component="p" sx={{ margin: '0.8em',textAlign:'center' }}>
              {translations.homepage.footer1}
             <br />
             {translations.homepage.footer2}
             </Box>
            </Box>         
      </Grid>  
      <FormModal open={isModalOpen} handleClose={handleCloseModal} />
    </div>
  );
};

export default Homepage;