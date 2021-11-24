import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { Grid } from '@mui/material';

import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
    display: 'flex',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
    marginTop: '3em',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <foooter className={classes.footer}>
      <Grid container justifyContent='center' className={classes.mainContainer}>
        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column' spacing={2}>
            <Grid item component={Link} to='/' className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column' spacing={2}>
            <Grid item component={Link} to='/services' className={classes.link}>
              Services
            </Grid>
            <Grid
              item
              component={Link}
              to='/customsoftware'
              className={classes.link}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              component={Link}
              to='/mobileapps'
              className={classes.link}
            >
              Mobile App Development
            </Grid>
            <Grid item component={Link} to='/websites' className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              component={Link}
              to='/revolution'
              className={classes.link}
            >
              The Revolution
            </Grid>
            <Grid
              item
              component={Link}
              to='/revolution'
              className={classes.link}
            >
              Vision
            </Grid>
            <Grid
              item
              component={Link}
              to='/revolution'
              className={classes.link}
            >
              Technology
            </Grid>
            <Grid
              item
              component={Link}
              to='/revolution'
              className={classes.link}
            >
              Proccess
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column' spacing={2}>
            <Grid item component={Link} to='/about' className={classes.link}>
              About Us
            </Grid>
            <Grid item component={Link} to='/about' className={classes.link}>
              History
            </Grid>
            <Grid item component={Link} to='/about' className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>

        <Grid item className={classes.gridItem} xs={2}>
          <Grid container direction='column' spacing={2}>
            <Grid item component={Link} to='/contact' className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
    </foooter>
  );
}
