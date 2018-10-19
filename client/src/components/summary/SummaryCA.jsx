import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paperRoot:    {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }, 
  root: {
      marginLeft: "15%",
      marginRight: "15%"
  }
});

function SummaryCA(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paperRoot} elevation={6}>
        <Typography variant="body2" component="h3" align="center">
            <b>{`Corrective Action Verified?:`}</b> &nbsp; <i>{`Yes`}</i>
        </Typography>
        <Typography variant="body2" component="h3" align="center">
            <b>{`Date of Verification:`}</b> &nbsp; <i>{`09/19/2018`}</i>
        </Typography>
      </Paper>
    </div>
  );
}

SummaryCA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryCA);