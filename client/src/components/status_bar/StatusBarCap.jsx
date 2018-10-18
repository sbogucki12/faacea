import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SBContentCap from './SBContentCap';

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

function StatusBarCap(props) {
  const { classes } = props;

  return (
    <div>
        <center>
            <Paper className={classes.root} elevation={6}>
                <SBContentCap />
            </Paper>
        </center>
    </div>
  );
}

StatusBarCap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusBarCap);