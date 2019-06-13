import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginRight: 250,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    maxWidth: '100%',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Nav />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h5" className={classes.title}>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card title='Card 1' useGraph={true} />
          </Grid>
          <Grid item xs={4} md={4}>
            <Card title='Card 2' />
          </Grid>

          <Grid item xs={4} md={6}>
            <Card title='Card 3' />
          </Grid>
          <Grid item xs={4} md={6}>
            <Card title='Card 4' />
          </Grid>
        </Grid>
      </main>

    </React.Fragment>
  )
}
