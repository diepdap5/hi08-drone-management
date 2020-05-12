import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './Component/Slider'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

function App() {
  return (
    <div className="App">
      <Grid container spacing={0}>
        <Grid item lg={12}>
          <Grid item lg={2}>
            <img src="../public/image/logo.png" />
          </Grid>
          <Grid item lg={10}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Slider />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
