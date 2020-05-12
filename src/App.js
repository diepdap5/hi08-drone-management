import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import NoiDung from './Component/Noidung'
import Slider from './Component/Slider'
import Header from './Component/Header'
import Footer from './Component/Footer'
import './App.css'

const style = theme => ({
    header: {
      height: 100,
    }
})

const Group_names = ['HI_01', 'HI_02', 'HI_03','HI_04','HI_05','HI_06','HI_07','HI_08','HI_09','HI_10' ]
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
              <Header Group_names = {Group_names} />
            </Grid>
            <Grid item lg={12}>
              <Slider />
            </Grid>
            <Grid item lg={12}>
              <NoiDung Group_names = {Group_names}/>
            </Grid>
            <Grid item lg={12}>
              <Footer title="Footer" description="Something here to give the footer a purpose!" />
            </Grid>
          </Grid>
        </div>
  
        )
    }
  }
export default withStyles(style)(Home);