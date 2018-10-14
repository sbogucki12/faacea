import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function SummaryMain(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.paperRoot} elevation={6}>
        <Typography component="h2" variant="display1" gutterBottom align="center">
          {`Action Summary`}
        </Typography>
      </Paper>
    </div>
  );
}

SummaryMain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryMain);