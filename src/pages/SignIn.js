import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

const defaultTheme = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
    palette: {
     
    },
    palette: {
      warning: {
        main: '#ff9800',
        dark: '#f57c00',
      },
    },
  });


export default function SignIn() {
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const { email, password } = data;

      if (email !== 'correct-email@example.com' || password !== 'correct-password') {
        setIsErrorDialogOpen(true);
        return;
      }
    
    navigate('/dashboard');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh', backgroundColor: '#454080', }}>
        <CssBaseline />

       <Grid item xs={50} sm={8} md={5} component={Paper} elevation={6}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              colour : "#E3E1FF",
              backgroundColor: '#E3E1FF',
            
            }}
          >
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="warning"  />} //orange checkbox
                label="Remember me"
                
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'warning.main', '&:hover': { bgcolor: 'warning.dark' } }}
                
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}