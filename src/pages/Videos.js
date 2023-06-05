import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { mainListItems} from './listItems';
import { Grid } from '@mui/material';
import Card from "./card";
import Button from '@mui/material/Button';
import axios from 'axios';

const drawerWidth = 240;

const theme = createTheme();

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      background: '#E3E1FF', // Change drawer's the background color here
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme(
    {
        typography: {
          fontFamily: 'Poppins',
        },
      },
        { palette: { 
      primary: {
          main: '#E3E1FF',} // Change the primary color here
        },
      },
);

const Container = styled(Grid)`
margin-top: 100px;
margin-left: 25px;
margin-right: 25px;
`;

function Videos() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleUploadClick = () => {
    axios.post('https://b767-2402-3a80-1e09-f34d-110b-d2b4-487c-6788.ngrok-free.app/home/upload/', /* data payload */)
      .then(response => {
        // Handle the response from the backend
        console.log(response.data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
              backgroundColor : '#E3E1FF' //APPBAR color
            }}
          >
            <IconButton
              edge="start"
              color="white"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h3"
              variant="h5"
              // cloudpi text color
              noWrap
              sx={{ flexGrow: 1, color : "#50469D" }}
            >
              Videos
            </Typography>

            {/* upload button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#50469D',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: '#3B3272',
                },
                marginRight: '25px',
              }}
              onClick={handleUploadClick}
                // Add your upload logic here
              
            >
              Upload
            </Button>

            <IconButton>
              <Badge>
                <AccountCircleIcon />
                <Typography variant="body1" sx={{ marginLeft: 1, color : "#50469D" }}>
                 Nandakumar
                </Typography>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav" sx={{ mt: 2 }}>
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: 'white', //bg colour of main component
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >

          <Container container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card />
              </Grid>
            {/* Add more Grid items with Card components here */}
          </Container>
          <Toolbar />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function VideosContent() {
  return <Videos />;
}