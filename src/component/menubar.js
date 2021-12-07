import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import ButtonGroup from '@mui/material/ButtonGroup';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchAppBar() {
  const [value, setValue] = useState([]);
  return (
    <Box sx={{ flexGrow: 1 }}>


      <AppBar position="static">
        <Toolbar>
        
        <Button size="small" color="inherit">Subscribe</Button>
          <IconButton 
           
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
         <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

<Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
         <h1>SHOPPING MALL</h1>
        </Typography>  

         
          </Typography>



          <Search width="800px" >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <Button   variant="outlined" size="small"   color="inherit">
          Sign up
        </Button>
        <IconButton
        
          size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           <ShoppingCartIcon />
          <LocalShippingIcon />
          </IconButton>
           
        </Toolbar>
      </AppBar>


    

    {/* <ButtonGroup  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
    <Button  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Ready To Ship</Button>
      <Button  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Personal Protective Equipment</Button>
      
      <Button sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Trade Shows</Button>


      <Button sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Buyer Central</Button>
      <Button sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Sell on Alibaba</Button>
      <Button>Help</Button>

      <Button>Get the app</Button>
      <Button>English-PKR</Button>
      <Button>Ship TO-PAK</Button>
    </ButtonGroup> */}

<Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

    </Box>
  );
  }