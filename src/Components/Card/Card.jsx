import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from './Button';

import Graph from '../Graph/Graph';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    height: '40vh',
  },
  content: {
    width: '100%',
    minHeight: '75%',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <Button />
        }
        title={props.title}
      />
      <CardContent className={classes.content} align="center">
        {props.useGraph === true ? <Graph /> : 'Card content'}
      </CardContent>
    </Card>
  );
}