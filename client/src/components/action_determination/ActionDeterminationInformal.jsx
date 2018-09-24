import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ActionDeterminationInformalList from './ActionDeterminationInformalList';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function ActionDeterminationInformal(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Paper className={classes.root} elevation={6}>      
        <Typography variant="headline" gutterBottom align="center">
          Action Determination
        </Typography>             
        <ActionDeterminationInformalList />
        <Typography variant="button" gutterBottom align="center">
          Button
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

ActionDeterminationInformal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActionDeterminationInformal);