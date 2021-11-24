import React from 'react';
import { makeStyles } from '@material-ui/core';
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
    backgroundColor: theme.palette.common.blue,

    width: '25em',
    verticalAlign: 'buttom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <foooter className={classes.footer}>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
    </foooter>
  );
}
