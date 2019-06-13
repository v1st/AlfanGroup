import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../Nav/Nav';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginRight: 250,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Nav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h5" className={classes.title}>
          Home
        </Typography>
      </main>
    </React.Fragment>
  )
}
