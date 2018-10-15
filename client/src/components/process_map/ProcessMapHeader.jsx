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
  root:     {
      marginTop: "1%",
      marginLeft: "3%",
      marginRight: "3%",
      marginBottom: "3%"
  }
});

function ProcessMapHeader(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paperRoot} elevation={6}>
        <Typography component="h2" variant="display1" gutterBottom align="center">
            {`Compliance Action Process`}
        </Typography>
        <Typography variant="caption" gutterBottom align="center">
          {`This page summarizes how CEA will assist you in processing this Compliance Action.`} 
        </Typography>
      </Paper>
    </div>
  );
}

ProcessMapHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProcessMapHeader);