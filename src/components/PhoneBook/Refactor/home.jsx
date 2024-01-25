import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const styles ={ 
    message: {
        color: '#fff',
        backgroundColor: 'fff',
        padding: 4,
        borderRadius: 8,
        textAlign: 'center',
        marginTop: 2,
        width: '100%',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiButtonRoot': { 
          marginLeft: 1,
          
          transition: 'color 0.3s ease-in-out',
          fontSize: '36px',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#1b849a',
          },
        },
      },
}

const Home = () => {
  return (
    <Paper style={styles.Home}>
      <Typography variant="body1" style={{ fontSize: '36px', padding: 10 }}>
        Please{' '}
        <Button component={Link} to="/register" color="inherit" variant="contained" style={{ background: '#25773b', fontSize: '16px', borderRadius: 24 }}>
          Register
        </Button>{' '}
        or{' '}
        <Button component={Link} to="/login" color="inherit" variant="contained" style={{ background: '#25773b', fontSize: '16px', borderRadius: 24 }}>
          Log in
        </Button>{' '}
        to add a contact.
      </Typography>
    </Paper>
  );
};

export default Home;
