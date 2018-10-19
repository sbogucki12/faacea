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

function SummaryADE(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paperRoot} elevation={6}>
        <Typography variant="body2" component="h3" align="center">
            <b>{`Tracking Number:`}</b> &nbsp; <i>{`ABC-123-2018NM`}</i>
        </Typography>
        <Typography variant="body2" component="h3" align="center">
            <b>{`Regulated Entity:`}</b> &nbsp; <i>{`Joe's Airplane`}</i>
        </Typography>
        <Typography variant="body2" component="h3" align="center">
            <b>{`Action Type:`}</b> &nbsp; <i>{`Administrative - Formal`}</i>
        </Typography>
      </Paper>
    </div>
  );
}

SummaryADE.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryADE);