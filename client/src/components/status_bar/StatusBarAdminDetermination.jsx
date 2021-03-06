import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StatusBarContent from './StatusBarContent';
import SBContentAdminDetermination from './SBContentAdminDetermination';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: "60%", 
    marginTop: "1%",
    marginBottom: 20
  },
});

function StatusBarAdminDetermination(props) {
  const { classes } = props;

  return (
    <div>
        <center>
            <Paper className={classes.root} elevation={6}>
               <SBContentAdminDetermination />
            </Paper>
        </center>
    </div>
  );
}

StatusBarAdminDetermination.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusBarAdminDetermination);