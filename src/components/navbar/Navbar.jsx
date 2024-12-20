import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import newLogo from '../../images/newlogo.png'
import ReactFlagsSelect from 'react-flags-select';
import './Navbar.css'
import { AppContext } from '../../AppContext';
import { useNavigate } from 'react-router-dom';
import FormModal from '../../components/modal/FormModal'
import { Dialog, DialogContent, DialogTitle } from '@mui/material';


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  const appBarStyles = {
    backgroundColor: trigger ? 'black' : 'inherit',
    transition: 'background-color 0.8s',
  };
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: appBarStyles,
  });
}
// const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Navbar = (props) => {

  const [,setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [select, setSelect] = useState("GB");
  const {language,setLanguage} = useContext(AppContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const translations = require(`../../translations/${language.toLowerCase()}.json`);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeLanguage = (newLang) => {
    navigate(`/${newLang.toLowerCase()}/`);
  };
  const onSelect = (code) => {
    if(code === 'SA' || code === 'RU' || code === 'GB'){
        setLanguage(code);
        handleChangeLanguage(code);
        setSelect(code);
    }
}

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
const scrollToViewAndCloseMenu = (scrollToFunction, onCloseFunction) => {
    scrollToFunction();
    onCloseFunction();
  };

  const scrollToAboutUs = () => {document.getElementById('aboutUs').scrollIntoView({ behavior: 'smooth' });};
  const scrollToCollaborate = () => {document.getElementById('collaboration').scrollIntoView({ behavior: 'smooth' });};
  const scrollToContact = () => {document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });};


  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);

  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Dialog
      fullScreen
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        style: {
          background: '#212121',         
          color: 'white',
          
        },
      }}
    >
      <DialogTitle >
        <Box sx={{ padding: '0.1em ',textAlign:'right' }} onClick={handleMobileMenuClose}>
          <CloseIcon />
        </Box>
      </DialogTitle>
      <DialogContent style={{marginTop:'5em'}}>
        <MenuItem sx={{padding:'1em 0 0 5em'}} onClick={() => scrollToViewAndCloseMenu(scrollToAboutUs, handleMobileMenuClose)}>
          <Link
            style={{ textDecoration: 'none', color: 'white', fontStyle: 'italic', fontSize: '1.5em', fontWeight: 'bold' }}
            to="#" onClick={scrollToAboutUs}
          >
            {translations.homepage.navMenuAboutUs}
          </Link>
        </MenuItem>
        <MenuItem sx={{padding:'1em 0 0 5em'}} onClick={() => scrollToViewAndCloseMenu(scrollToCollaborate, handleMobileMenuClose)} >
          <Link
            style={{ textDecoration: 'none', color: 'white', fontStyle: 'italic', fontSize: '1.5em', fontWeight: 'bold' }}           
          >
            {translations.homepage.navMenuCollaboration}
          </Link>
        </MenuItem>
        <MenuItem sx={{padding:'1em 0 0 5em'}} onClick={()=>scrollToViewAndCloseMenu(scrollToContact, handleMenuClose)}>
          <Link
            style={{ textDecoration: 'none', color: 'white', fontStyle: 'italic', fontSize: '1.5em', fontWeight: 'bold',}}            
          >
            {translations.homepage.navMenuContacts}
          </Link>
        </MenuItem>
        <MenuItem
          className="becomeAgentBttton"
          onClick={handleOpenModal}
          sx={{
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
            marginTop: '2em',
            padding: '0.5em 0.5em 0.5em 3em',
          }}
        >
          {translations.homepage.becomeAgent}
        </MenuItem>
      </DialogContent>
    </Dialog>
  );

  return (
    <Box>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar >
          <Toolbar sx={{display:'flex',alignItems:'center',textAlign:'center',justifyContent:'space-around'}}>
            {/* menuBtn */}
            <IconButton size="large" edge="center" aria-label="open drawer" aria-controls={mobileMenuId} onClick={handleMobileMenuOpen} 
            sx={{display: {
                    lg: 'none',
                    md:'none',
                    xs:'block'}, order:{xs:3},color:'white !important'}}                    
            >
              <MenuIcon/>
            </IconButton>
            {/* image */}
            <Typography sx={{order:{xs:1,lg:1}}}
              variant="h3"
              component="div"
            >
              <Link style={{ textDecoration: "none", color: 'WHITE' }} to='/'>
              {/* <Box fontWeight={'bold'} fontStyle={'italic'} > <Box component={'span'} color={'#FEBD02'}> MEL</Box><Box component={'span'}>BET</Box> </Box> */}
            <Box component={'img'} sx={{ width: { xs: '2em', lg: '2.8em' }, paddingBottom: { lg: '0.1em',xs:"0.2em" } }} src={newLogo} alt="logo" />
              </Link>
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex', color: 'grey' },order:{lg:2} }}>
              <MenuItem>     <Link style={{ textDecoration: "none", color: 'white', fontStyle: 'italic', fontSize: '1em',fontWeight:'bold' }} to='#' onClick={scrollToAboutUs}>{translations.homepage.navMenuAboutUs}</Link>   </MenuItem>
              <MenuItem >    <Link style={{ textDecoration: "none", color: 'white', fontStyle: 'italic', fontSize: '1em',fontWeight:'bold' }} to='#' onClick={scrollToCollaborate}>{translations.homepage.navMenuCollaboration}</Link>   </MenuItem>
              <MenuItem>    <Link style={{ textDecoration: "none", color: 'white', fontStyle: 'italic', fontSize: '1em',fontWeight:'bold' }} to='#' onClick={scrollToContact}>{translations.homepage.navMenuContacts}</Link>    </MenuItem>
              <MenuItem className="becomeAgentBttton" sx={{backgroundColor: '#FEBD02',borderRadius: '3px',fontWeight: 500,fontSize: '18px',lineHeight: '21px',textAlign: 'center',textTransform: 'uppercase',color: '#000000',textShadow: '0 2px 0 #FFCF44',height:'1em',margin:'0.8em',padding:'1em'          
              }} onClick={handleOpenModal} > {translations.homepage.becomeAgent}</MenuItem>              
            </Box>
            {/* language */}
            <Box sx={{order:{xs:2}}}>
            <MenuItem >
                <ReactFlagsSelect                
                  selected={select}
                  onSelect={onSelect}
                  countries={["GB","RU","SA","FR", "es", "ES", "pt", "PT", "zh", "CN", "ja", "JP", "th", "TH", "az", "AZ","kr", "KR", "my", "MY"]}
                  customLabels={{
                    GB: "EN",RU: "RU",SA: "AR",FR: "FR", es: "es", ES: "ES", pt: "pt", PT: "PT", CN: "ZH", ZH: "ZH", JP: "JA", JA: "JA", th: "TH", TH: "TH", az: "AZ", AZ: "AZ",AR: "AR", kr: "KR", KR: "KR", my: "MY", MY: "MY"
                  }}
                  selectedSize={15}
                  optionsSize={15} />
            </MenuItem>


            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <FormModal open={isModalOpen} handleClose={handleCloseModal} />
      {renderMobileMenu}     
    </Box>
  );
};

export default Navbar;