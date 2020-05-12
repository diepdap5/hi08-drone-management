import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Slider from './Component/Slider'
import Header from './Component/Header'
import Footer from './Component/Footer'

const style = theme => ({
    header: {
      height: 100,
    }
})

const Valuebutton = ['1', '2', '3','4','5','6','7','8','9','10' ]
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
    }
  }
    render() {
        const { classes } = this.props;
        return (
          <div className="App">
          <Grid container spacing={0}>
            <Grid item lg={12} >
              <Header />
            </Grid>
            <Grid item lg={12}>
              <Slider />
            </Grid>
            <Grid item lg={12}>
              <Footer />
            </Grid>
          </Grid>
        </div>
  
        )
    }
  }
export default withStyles(style)(Home);