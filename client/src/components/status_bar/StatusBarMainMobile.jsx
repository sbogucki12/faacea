import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StatusBarContent from './StatusBarContent';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: 280, 
    marginTop: "1%",
    marginBottom: 20
  },
});

function StatusBarMainMobile(props) {
  const { classes } = props;

  return (
    <div>
        <center>
            <Paper className={classes.root} elevation={6}>
                <StatusBarContent />
            </Paper>
        </center>
    </div>
  );
}

StatusBarMainMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusBarMainMobile);