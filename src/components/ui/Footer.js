import React from 'react';
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
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <foooter className={classes.footer}>
      <Grid container justifyContent='center' className={classes.mainContainer}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item className={classes.link}>
              home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item className={classes.link}>
              Services
            </Grid>
            <Grid item className={classes.link}>
              Custom Software Development
            </Grid>
            <Grid item className={classes.link}>
              Mobile App Development
            </Grid>
            <Grid item className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item className={classes.link}>
              The Revolution
            </Grid>
            <Grid item className={classes.link}>
              Vision
            </Grid>
            <Grid item className={classes.link}>
              TEchnology
            </Grid>
            <Grid item className={classes.link}>
              Proccess
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item className={classes.link}>
              About Us
            </Grid>
            <Grid item className={classes.link}>
              History
            </Grid>
            <Grid item className={classes.link}>
              TEam
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='column'>
            <Grid item className={classes.link}>
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
